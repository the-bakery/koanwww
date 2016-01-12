# koanwww
# koanwww

To run the website initially:
  - Install build tools
    - Install NPM via distro of your choice (google.com node package manager)
    - $ npm install -g bower gulp
  - Download repo
  - Inside repo, run:
    - $ npm install
    - $ bower install

To launch the website:
  - $ gulp serve

How to develop:
  - The setup of this repository is the default one in yeoman's "gulp-angular" generator.  I don't really know how it works, but here are some key points:
    - CSS is in SASS, which is a slightly more sophisticated pre-processed language that makes your life better.  Learn it.
    - Pure JS, but we use Angular to set up the stuff.  Angular is not complicated.  Just find the Home controller and code whatever Javascript you need to (but feel free to ask if you want to learn how bindings work for example)
    - I actually have most idea how much of this stuff works.  If it's too complicated we can nix it all.
