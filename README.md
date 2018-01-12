
# **Read Me**
(or don't) (I'll know if you don't though)


### Components

- ubuntu running Ubuntu 17.10
- docker, docker-compose
- nginx as a server and reverse-proxy
- webpack with
  - stylus
  - babel
  - react-hot-loader
- yarn
- node
- express
- react
- javascript
  - eslint-config-airbnb
- HTML
- CSS

#### To Add

- ansible
- vagrant
- AWS or Google Cloud hosting
- redux
- stylelint
- prettier
- sgrid or jeet
- jest + enzyme
- flow

<!--- nvm, npm -->



### Getting Started

1. Install git

  ```bash
  sudo apt-get install git
  ```

2. Set up repo. Before this script, create your repo on GitHub website.

  ```bash
  cd <projects folder>
  git clone <SSH link copied from your GitHub repo page>
  git clone <SSH link copied from this GitHub repo page>
  cd <name of this repo folder>
  rm -rf .git
  cd ..
  mv <name of this repo folder> <name of your repo folder>
  ```

3. Install VirtualBox

  *According to your distribution, replace '<mydist>' with 'artful', 'zesty', 'yakkety', etc*

  *There should be a better way to check the key fingerprint, but the way that I add the key results in there not being a filename listed for the key in apt-key list, and apt-key only has built-in search functionality for filenames of the keys, I believe.*

  *B9F8 D658 297A F3EF C18D  5CDF A2F6 83C5 2980 AECF
  Oracle Corporation (VirtualBox archive signing key) <info@virtualbox.org>*

  *For more info: https://www.virtualbox.org/wiki/Linux_Downloads*

  ```bash
  echo "deb http://download.virtualbox.org/virtualbox/debian artful contrib" | sudo tee -a /etc/apt/sources.list
  wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
  apt-key list | grep "B9F8"
  sudo apt-get update
  sudo apt-get -y install virtualbox-5.2 dkms
  ```

4. Install Vagrant

  *vagrant -v should return `Vagrant 2.0.1`*

  *For more info: https://www.vagrantup.com/intro/getting-started/install.html*

  ```bash
  gem uninstall vagrant
  wget https://releases.hashicorp.com/vagrant/2.0.1/vagrant_2.0.1_x86_64.deb
  sudo dpkg -i vagrant_2.0.1_x86_64.deb
  vagrant -v
  rm vagrant_2.0.1_x86_64.deb
  ```

5. Install Ansible

  *Note: Maybe change this to installing via pip in the future -- not wasting time on this while pip is still at legacy python2 by default*

  *For more info: http://docs.ansible.com/ansible/latest/intro_installation.html*

  ```bash
  sudo apt-get install software-properties-common
  sudo apt-add-repository ppa:ansible/ansible
  sudo apt-get update
  sudo apt-get -y install ansible
  ```
6. Run Ansible, Vagrant, Virtualbox

  *Note: need to add requirements.yaml and Vagrantfile*

  ```bash
  ansible-galaxy install -r requirements.yml
  vagrant provision
  vagrant up
  vagrant ssh
  ```

    <!--Install npm.

    *Note: This project is not expressly using npm, so this is extraneous info that I am saving because it is useful*

    *For more info: https://github.com/creationix/nvm/blob/master/README.md#installation*

    ```bash
    cd ~
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    sudo chown -R $USER:$(id -gn $USER) /home/commander/.config   #replace commander with your username
    nvm install node
    nvm use node
    ```-->

    **Note:** Everything after this should be moved to an automated script in the previous steps

7. Install Yarn

  *For more info: https://yarnpkg.com/lang/en/docs/install/*

  ```bash
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  sudo apt-get update && sudo apt-get install yarn
  ```

8. Run Yarn

  *Note: There are certain packages that have project-level-utility (such as eslint), and so are installed into the web directory while frontend and backend code have their own dependencies. This makes for de-coupling while making use project-wide packages like those mandated by eslint-config-airbnb.*

  *Project-wide eslint configuration may be overriden easily by modifying/creating the .eslintrc file for that directory.*

  *As shown here, eslint configuration in the web directory is overriden in the frontend. Any settings defined in parent directories are inherited, unless explicity overriden.*

  *Note that the front-end and back-end have not been linked in this version.*

  ```bash
  cd web
  yarn install
  cd frontend
  yarn install
  cd .. && cd backend
  yarn install
  ```

9. Install Docker

  *Note: verify that the fingerprint is 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88*

  *I require the edge repo because I use Ubuntu 17.10 instead of a stable release, and I use Ubuntu 17.10 because newer laptops sometimes require it for best functioning. Unfortunately. If you do not need edge, just install stable. Remove 'edge from the string in the add-apt-repository'*

  *For more info: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/*

  *Make sure Docker number version is the latest number. I used 1.18.0.*

  *For info on Docker Compose: https://docs.docker.com/compose/install/#install-compose*

  ```bash
  sudo apt-get remove docker docker-engine docker.io
  sudo apt-get update
  sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  sudo apt-key fingerprint 0EBFCD88
  sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable edge"
  sudo apt-get update
  sudo apt-get install docker-ce
  sudo docker run hello-world
  sudo systemctl enable docker
  sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
  ```

10. Run Docker

  *After this, you just need to visit localhost:8084 in your browser.*

  ```bash
  docker-compose build
  docker-compose up
  ```
