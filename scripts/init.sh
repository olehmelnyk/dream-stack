#!/bin/bash

# Install brew if not installed
if ! command -v brew &> /dev/null
then
    exec /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    echo brew version: $(brew -v)
fi

brew_install() {
    echo "⏳ Installing $1"
    if brew list $1 &>/dev/null; then
        echo "✅ ${1} is already installed"
    else
        brew install $1 && echo "✅ $1 is installed"
    fi
}

brew_install "zsh"
brew_install "volta"
brew_install "pnpm"
# brew_install "nvm"
brew_install "docker"

# Install Androud Studio if not installed
exec brew list android-studio &>/dev/null || exec brew install --cask android-studio
