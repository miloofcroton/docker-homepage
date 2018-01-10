
# **Read Me**
(or don't) (I'll know if you don't though)


### Components

- Ubuntu running Ubuntu 17.10
- docker, docker-compose
- nginx as a server and reverse-proxy
- webpack with
  - stylus
  - babel
  - hot reloading enabled along with react-hot-loader v4
  - configured rapid-solid development and production builds
- yarn
- node.js
- express
- react
- JavaScript
  - eslint-config-airbnb
- HTML
- CSS

<!--- nvm, npm -->

### Getting Started

1. Set up repo. Before this script, create your repo on GitHub website.

  ```bash
  cd <projects folder>
  git clone <SSH link copied from your GitHub repo page>
  git clone <SSH link copied from this GitHub repo page>
  cd <name of this repo folder>
  rm -rf .git
  cd ..
  mv <name of this repo folder> <name of your repo folder>
  ```
<!--2. Install npm.

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

2. Install Yarn

  *For more info: https://yarnpkg.com/lang/en/docs/install/*

  ```bash
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  sudo apt-get update && sudo apt-get install yarn
  ```

4. Run Yarn

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

5. Install Docker

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

6. Run Docker

  *After this, you just need to visit localhost:8084 in your browser.*

  ```bash
  docker-compose build
  docker-compose up
  ```
