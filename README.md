# Chitter Challenge [![Build Status](https://travis-ci.org/hsheikhm/chitter-challenge.svg?branch=master)](https://travis-ci.org/hsheikhm/chitter-challenge)

* [Task](#task)
* [My Approach](#my-approach)
* [Directory Structure](#directory-structure)
* [App Main Usage and Features](#app-main-usage-and-features)
* [Demo App](#demo-app)
* [Download Instructions](#download-instructions)

## Task

Build a Twitter clone that will allow users to post messages to a public stream.

#### User Stories:

```
As a Maker
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a Maker
So that I can post messages on Chitter as me
I want to log in to Chitter

As a Maker
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter

As a Maker
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a maker
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a maker
So that I can better appreciate the context of a peep
I want to see the time at which it was made
```
## My Approach

Besides creating a **Minimum Viable Product (MVP)** I decided that the main goal of this project was to achieve a **Separation of Concerns**. This therefore meant keeping the **business logic** separate from the **User Interface (UI)**. My approach was to therefore work on the logic first and then once all the logic was in place and all the tests were passing (via **RSpec**) I would work on the layout of the website.

In previous projects I had usually created a single controller to manage all the logic but for this one I decided to create several controllers (listed below) so that my code could be even further separated. The benefits of this are that each controller would have one **single responsibility** and furthermore it would be easier to make a change to any controller.

* [Base Controller](https://github.com/hsheikhm/chitter-challenge/blob/master/app/controllers/base_controller.rb) (Responsible for app configuration and helper methods).
* [Maker Controller](https://github.com/hsheikhm/chitter-challenge/blob/master/app/controllers/maker_controller.rb) (Responsible for login, sign up and logout features).
* [Peep Controller](https://github.com/hsheikhm/chitter-challenge/blob/master/app/controllers/peep_controller.rb) (Responsible for creating a new peep/message).


I had created the app in **Ruby** and also adopted the **Sinatra** framework since they go really well together. As for storing the users and peeps, this was achieved by using **DataMapper** and **PostGresQL**. I had also used the '**Bcrypt**' gem to encrypt passwords.

One reason why I really like Sinatra is that you can benefit from using its **layout** template for styling the app. I therefore used a layout file to style the common features of the app and further created separate views for login, sign up and home etc. I had adopted **HTML**, **CSS** and **Bootstrap** to style the app.

## Directory Structure

```
├── app/
│   ├── controllers/
│   │   ├── base_controller.rb
│   │   ├── maker_controller.rb
│   │   └── peep_controller.rb
│   │
│   ├── models/
│   │   ├── maker.rb
│   │   └── peep.rb
│   │
│   ├── public/
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── js/
│   │
│   ├── views/
│   │   ├── maker/
│   │   │   ├── home.erb
│   │   │   ├── login.erb
│   │   │   └── signup.erb
│   │   └── layout.erb
│   │
│   ├── app.rb
│   └── data_mappper_setup.rb
│
├── spec/
│   │── features/
│   ├── models/
│   ├── spec_helper.rb
│   └── web_helpers.rb
│

```

## App Main Usage and Features

***New user can sign up to Chitter:***

![Sign Up Page](https://github.com/hsheikhm/Github-Images/blob/master/chitter-challenge/signup.png)

***Existing user can login to Chitter:***

![Login Page](https://github.com/hsheikhm/Github-Images/blob/master/chitter-challenge/login.png)

***User can post a peep and view all peeps:***

![Home Page](https://github.com/hsheikhm/Github-Images/blob/master/chitter-challenge/home.png)

## jQuery Features

***User can view a peep close up:***

***User can delete their own peep:***

***User can choose to hide all peeps:***

***User can search for a peep:***

***User can see how many characters they have left to use:***

***User can see how many peeps they have posted in total:***





## Demo App

Visit the link below to see a live version of the app.

[Chitter Web App](https://welcome-to-chitter.herokuapp.com/signup)

## Download Instructions

Follow the below instructions on your terminal to download the app:

```
$ git clone https://github.com/hsheikhm/chitter-challenge.git
$ cd chitter-challenge
$ bundle
$ rackup
```
