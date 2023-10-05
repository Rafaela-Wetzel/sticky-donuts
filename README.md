# Code Institute: HTML/CSS project by Rafaela Wetzel

This fictional café homepage has been created to showcase the HTML/CSS skills I have attained over the past two months. It is the first out of five projects.  

## Sticky Donuts Café Leipzig

Sticky Donuts is a homepage for the first vegan donut café in Leipzig, Germany. The purpose is to present and advertise the café and its offerings as well as provide necessary information on how to find the café to attract customers. The target group is people who follow a plant-based diet and/or enjoy sweet culinary delights. 

Pictures??

## Features 

The homepage presents its information on a single scrolling page with four sections: Home, Our Donuts, Drinks and Contact. Furthermore, it is fully responsive to different screen sizes.

### Existing Features

- __Navigation Bar__

  - The header includes both the name of the café as well as a navigation bar. It has the function to give a quick overview of the homepages' content making it easy to navigate back and forth. Clicking the individual section titles in the navigation bar will lead the user to the respective content section of the homepage so they do not have to scroll all the way. It also features three social media icons (Facebook, Instagram and TikTok) that open in a new tab when clicked. The nagivation bar is part of the sticky header at the top of the page. It is visible all the time even when a user scrolls down which makes it possible to nagivage back to a respective section without having to scroll all the way to the top. Hovering over the navigation bar elements gives the user a feedback by changing color from white to soft pink so they better see where their cursor currently is.

Nav Bar Picture

- __Delicious vegan donuts in Leipzig section__

  - The home section includes a concise heading, an introductory text as well as a picture with three delicious looking donuts that catch the users' attention. The purpose is to welcome the user and to give a quick overview:  
  
    * *Where is the café located?* Leipzig-Plagwitz
    * *What can you get there?* Vegan homemade donuts
    * A reference to the donut and drinks section below for more information 

Delicious vegan donuts in Leipzig picture

- __Our Donuts Section__

  - The second section is called "Our Donuts" and presents the donut variations the café has to offer. To the top left there is a picture of four donuts and to the right of the picture a list of the different donut variations including mention of monthly changing special donuts. The purpose of the picture and list is to show the donut variety and to make the user curious about trying all the different styles. Below this paragraph there is a picture of the current donut of the month to the right side with a text to the left describing its components in detail. This paragraph is meant to highlight and give more detailed information about this special donut which is presented separately in a visual pleasing manner. Towards the end of the section there is additional information targeted at customers who might have certain allergies. This is supposed to convey transparency regarding the ingredients and the message that there potentially is something available for everyone.  

Our Donuts picture

- __Drinks Section__

  - The third section is called "Drinks" and gives an overview of choices. To the left there are three different categories: Autumn specials, tea and coffee. Each of these include a listing of the different types or flavors. To the right there is a picture of a cappucchino. This section is meant to present the variety of drink choices and let the customer know that there is something available to satisfy the thirst after a sweet donut.  

Drinks section picture

- __The Footer: Contact__ 

  - The footer section is called "Contact" and meant to give information about the location and opening times of the café as well as the different ways of getting in touch. At this point the user might be curious about trying some donuts and wants to know how to get there or how to get in touch should there be any questions left unanswered.
  
  - To easier get an idea of where the café is located there is a "Where to find us" heading and an embedded Google map. Below the user will find the address as well as a telephone number and e-mail address. The latter two are highlighted in purple and stick out from the black font color of the rest of the text. This shows visually that both elements are clickable - when hovering over them they turn black and clicking on them will open new windows, either to the users email program or to a tool enabling direct phone calls. Those two elements should make it easier / more convenient to get in touch.   

  - The next part of the contact section is about the "Opening Times" presented in a table. It is supposed to show when the café can be visited - the table format is used to structure the information in a visual way to be able to recognize the opening times at first glance.

  - The last part of the footer is the "Contact Form" which is supposed to make it easier to get in touch with the café owners. There is a name and e-mail address field as well as a textarea below. Above the textarea it says "We would love to hear from you!" which should encourage the user to write a message. Below those text areas there is a "Send" button that gives feedback by changing color from white to soft pink when hovered over. The message can only be sent if the user has entered information in all text fields, otherwise there is a pop-up window telling the user "Please fill out this field". Should a user enter a non-email address in the email address field the pop-up window says "Please enter an email address". 

Footer picture

### Features Left to Implement

- An integrated menu showing prices
- Small information windows when hovering over the individual donut names showing a dedicated picture and description of donut features; or:
- Showing and describing the single donuts in more detail, possibly with allergens, as a fixed part of the homepage
- A form to make a pre-order for donut boxes to pick up (or maybe even to order from a donut delivery service with an integrated payment system)

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

### Bugs & Problems

- For a while the W3C Markup Validation Service showed an error by pointing to a stray ```</p>``` when there apparently was no starting ```<p>```. I was quite confused because there clearly was a starting ```<p>```. It took a while for me to figure out that the issue was a nested list inside the ```<p>``` tag which is not valid code.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](link)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](link)

### Unfixed Bugs

- No unfixed bugs.

## Deployment

The Sticky Donuts homepage was deployed through GitHub Pages. 
- From the main project page on GitHub, navigate to *Settings*
- On the left side click on *Pages*
- Choose *Deploy from a branch*
- Set the branch to *main* and */ (root) and click on *Save* 
- After a few moments the live link shows at the top of the page.

It can be found here: https://rafaela-wetzel.github.io/Sticky-Donuts/

## Credits 

### Tutorials 

- How to [center content](https://www.computerhope.com/issues/ch001968.htm) within a table
- How to add [letter spacing](https://www.geeksforgeeks.org/how-to-set-letter-spacing-using-css/)
- How to use [scroll-margin-top](https://www.w3schools.com/cssref/css_pr_scroll-margin-top.php)  
- How to make an [e-mail address clickable](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_mailto)
- How to make a [phone number clickable](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_phoneto)

### Media

- The icon in the navigation bar was taken from [Font Awesome](https://icons8.com/icon/YFWa9iouLqLa/donut)
- The donut stock picture was taken from [Unsplash](https://unsplash.com/de/@amr_taha)  
- The cappucchino stock picture was taken from [Unsplash](https://unsplash.com/de/fotos/WdJ_5Txrg7k)  

### Other

- Help and feedback from my mentor Oluwafemi Medale

## Resources Used

- Balsamiq
- HTML & CSS
- Chrome Lighthouse
- Firefox & Chrome Dev Tools

## Color Palette  

<img src="assets/color-palette/palette.png" style="width:50%;height:25%;">

## Other General Project Advice

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 