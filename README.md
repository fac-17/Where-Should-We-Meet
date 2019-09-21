# Meet Me In The Middle 🌎

Hi! 👋 Welcome to [Meet Me In The Middle](https://meet-me-in-the-middl.herokuapp.com/) - the web app that takes your 📍 location, takes your friend's 📍location, and finds you a venue 🏛️ to meet at in the middle!

## Our problem 🤔

Imagine this: your friend Chris lives in Mile End, and you live in Imperial Wharf. This journey takes you over an hour, but for Chris, it's just a fifteen minute walk to Brick Lane, where you're meeting. 

Today is the third time in a month that you've made this journey to see Chris, because Chris thinks Brick Lane "is just, so cool" and he doesn't want to travel "all that way" to your part of London, where there's "not even anything to do". 

And, well, you can't really argue with Chris because you can't think of anywhere else to meet that cuts both journey times and is, well, "so cool".

Wouldn't it be wonderful to have an app that allows you to input two postcodes, and in return gives you loads of great venues to meet at? Venues in the middle of both of you?

**Have we got you hooked?** 🎣

If so, you can find out more about the initial idea for this web app project by visiting the [conception](https://github.com/fac-17/Where-Should-We-Meet/wiki/Conception) page in our wiki.

## Team 🤼

- [@laleonie](https://github.com/LaLeonie) - DevOps Lead
- [@sarahyjja](https://github.com/sarahyjja) - Scrum Master
- [@reubengt](https://github.com/reubengt) - UX/UI Lead
- [@georgiamshaw](https://github.com/georgiamshaw) - QA Lead

Find out more about the [team members](https://github.com/fac-17/Where-Should-We-Meet/wiki/Team) and their [roles](https://github.com/fac-17/Where-Should-We-Meet/wiki/Team-Roles) in this project. 

## Getting started 🏁

To download our project:

    git clone git@github.com:fac-17/Where-Should-We-Meet.git
    
    cd Where-Should-We-Meet
    
    npm i
    
    touch .env
    
Then add your Yelp API key to your ```.env``` file like this:

    YELP_API_KEY=[YOUR API KEY HERE]

To run the project locally:

    npm start

## Tech stuff 💻

Read about what we're using and why in our [tech stack](https://github.com/fac-17/Where-Should-We-Meet/wiki/Tech-Stack) and our [dependencies](https://github.com/fac-17/Where-Should-We-Meet/wiki/Dependencies) sections in the wiki.

## What we've done so far

- Set up file structure and added our dependencies.
- Set up Express server, deployed to Heroku and integrated with Travis.
- Set up our form on the front end. This is inside an image carousel, so that each input field appears on a different page.
- Wrote a resusable API call for all of our request modules.
- Made simultaneous requests for postcode conversion using Promise.all.
- Find the mid location between two postcodes by using the geolib module.
- Feed this middle location (by using the longtitude and latitude) into our Yelp API endpoint to generate a list of venues in this location.
- Retriving details from the API response to display on our venue page.
- Added swiping function on mobile for our image carousel.
- Added help and info pop ups onto the home and question mark images.
- Added links to open up Citymapper.
- Added link to add event to Google calendar.

## What we still need to do

- Lots of testing.
- Make the venue details display correctly - currently we can display the image and the rating in the correct place, but not the name, price or location.
- Lots of UX/UI - deciding on colours, fonts, styling etc.
- Add functionality to our heart svg - at the moment the user can click and the heart fills in colour, but it needs to allow a user to select a venue. 

## What we're unsure of

- We would like to add a second user, who is invited to the app by a link. They are then able to choose the venues along with the first user, and we would write code to find a meeting place out of the ones they both select. Not sure how to do this/if we'll have time!


