1. modify .bash_profile
  1.1 export PS="\W $ "

2. install brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

3. install iterm
    3.1 change color schema

4. configure git

```sh
# Set your username
$ git config --global user.name "Your Name Here"

# Set your email address
$ git config --global user.email "your_name@domain.com"
```
[add-ssh-key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

5. configure git prompt

```sh
parse_git_branch() {
  git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1]/'
}

export PS1="[\W]\[\033[31m\]\$(parse_git_branch)\[\033[00m\] 🚵  "
```

6. 设置输入法快捷键
System Preferences / Keyboard / Keyboard Shortcuts / Keyboard & Text Input 
