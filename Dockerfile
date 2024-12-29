FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bookworm

WORKDIR /root

# Install Zsh and Oh My Zsh (skip if already installed)
RUN apt-get update && apt-get install -y zsh curl \
    && if [ ! -d "$HOME/.oh-my-zsh" ]; then \
        curl -Lo install.sh https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh \
        && sh install.sh --unattended \
        && chsh -s $(which zsh); \
    fi

# Install zsh-autosuggestions plugin
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-/root/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Install zsh-syntax-highlighting
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# Install fast-syntax-highlighting
RUN git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting

# Modify the .zshrc file to enable the zsh-autosuggestions plugin and set the theme to agnoster
RUN sed -i '/^plugins=/ s/)/ zsh-autosuggestions zsh-syntax-highlighting fast-syntax-highlighting)/' /root/.zshrc \
    && sed -i 's/^ZSH_THEME=.*/ZSH_THEME="agnoster"/' /root/.zshrc

# Install oclif
RUN npm i -g oclif