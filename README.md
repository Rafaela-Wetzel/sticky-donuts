# Code Institute: HTML/CSS Project by Rafaela Wetzel

The first milestone project is about creating a static website and showcasing the HTML/CSS skills I have attained over the past two months at Code Institute. It is the first out of five projects.  

# Sticky Donuts Café Leipzig

Sticky Donuts is a fictional homepage for the first vegan donut café in Leipzig, Germany. Sometimes spending time in other big cities makes me quite envious of the amazing vegan donut places existing elsewhere but not where I live so I decided to create my own (at least virtually) 😄

# Table of Contents

- [Code Institute: HTML/CSS Project by Rafaela Wetzel](#code-institute-htmlcss-project-by-rafaela-wetzel)
- [Sticky Donuts Café Leipzig](#sticky-donuts-café-leipzig)
- [Table of Contents](#table-of-contents)
- [Live Demo](#live-demo)
- [UX](#ux)
  - [User Stories](#user-stories)
  - [Strategy](#strategy)
  - [Scope](#scope)
  - [Structure](#structure)
  - [Skeleton](#skeleton)
    - [Wireframe](#wireframe)
  - [Surface](#surface)
    - [Color Palette](#color-palette)
- [Technologies](#technologies)
- [Features](#features)
  - [Existing Features](#existing-features)
    - [Navigation Bar](#navigation-bar)
    - [Delicious Vegan Donuts in Leipzig Section](#delicious-vegan-donuts-in-leipzig-section)
    - [Our Donuts Section](#our-donuts-section)
    - [Drinks Section](#drinks-section)
    - [The Footer: Contact](#the-footer-contact)
  - [Features Left to Implement](#features-left-to-implement)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Lighthouse](#lighthouse)
  - [Bugs & Problems](#bugs--problems)
  - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Tutorials](#tutorials)
  - [Media](#media)
  - [Other](#other)

# Live Demo 

![A screenshot of the Sticky Donuts homepage on different screen sizes](assets/readme-assets/sticky-fingers-different-sizes.png)

You can see a deployed version of my website here: https://rafaela-wetzel.github.io/Sticky-Donuts/

# UX

## User Stories

A homepage visitor might want to have answers to the following questions:

- What does the café have to offer?
- What types of donuts and drinks are available?
- How do the donuts look like?
- What is the quality of the donuts / how are they made?
- What are the ingredients of the donuts?
- Can I eat something there despite being coeliac or having certain allergies? 
- What are their Social Media channels?
- Where is the café located?
- What are the opening times?
- How can I get in touch with the café owners?

The target group is people who...

- follow a plant-based diet 
- enjoy sweet culinary delights
- like to spend time in cozy cafés

## Strategy

The goal was to create a homepage that was simple and beautiful in design, with no distracting or overwhelming elements; welcoming, accessible and easy to navigate.

## Scope

The scope of the homepage is to present and advertise the café and its offerings as well as provide necessary information on how to get in touch and find the café to attract customers. 

## Structure 

The homepage presents its information on a single scrolling page with four sections: 

1. **Delicious Vegan Donuts in Leipzig:**  
Presents the most important information - What does the café have to offer? Where is it located? Additionally there is a hint to the donut and drinks section below.
2. **Our Donuts:**
Shows the variety of different donuts both in text and pictures. Highlights the donut of the month and offers transparency regarding allergens.
3. **Drinks:**  
Mentions the three available main drink categories: specials, tea and coffee. Lists different types and flavors within those categories. 
4. **Contact:** 
Is divided into three subsections.
   - **_Where to find us:_**  
   Shows an embedded Google map, the café address, phone number & email address as well as a flag icon to welcome queer people 
   - **_Opening times:_**  
   Shows the opening times within a table
   - **_Get in touch:_** 
   Provides a contact form where the user has to enter name, email address and a message  

There is a sticky header at the top that accompanies the user wherever on the homepage they are, making it easy to navigate back and forth. Furthermore, the homepage is fully responsive to different screen sizes.

## Skeleton

The homepage is designed as a single-scrolling page with a simple structure, presenting the most important information at the top. 

### Wireframe 

The first draft aka wireframe was designed with Balsamiq. The final result however turned out slightly different.  

I chose to use fewer pictures because the homepage looked too cluttered after the first attempt. I also completely exchanged the café section for a drinks section because the information I was showcasing in the café section did not seem coherent, rather like tiny pieces of information that felt misplaced. Including the drinks section made the homepage feel topped off after all. In the beginning I included both a contact form as well as a newsletter sign up possibility. I removed the latter because it did not seem relevant after all.  

<img src="assets/readme-assets/sticky-donuts-wireframe.png" style="height:40rem; width:25rem;" alt="A picture of a wireframe first draft made with Balsamiq for the Sticky Donuts homepage">

## Surface

### Color Palette  
        
<div style="display:flex; font-size:large;">
  <div style="background-color:#ebe6e0; height:7rem; width:7rem; color:#000; text-align:center;"><b>#ebe6e0</b></div>
  <div style="background-color:#cf9eac; height:7rem; width:7rem; color:#000; text-align:center;"><b>#cf9eac</b></div>
  <div style="background-color:#594365; height:7rem; width:7rem; text-align:center; color:#000;"><b>#594365</b></div>
  <div style="background-color:#795dbc; height:7rem; width:7rem; text-align:center; color:#000;"><b>#795dbc</b></div>
  <div style="background-color:#b87c4c; height:7rem; width:7rem; text-align:center;"><b>#b87c4c</b></div>
  <div style="background-color:#000; height:7rem; width:7rem; text-align:center;"><b>#000</b></div>
</div>
<br />
For the Sticky Donuts homepage I have used 6 unobtrusive colors chosen individually that blend well with each other. <span style="background-color:#cf9eac; color:#000;"><b>Soft pink (#cf9eac)</b></span> and <span style="background-color:#594365; color:#fff;"><b>dark purple (#594365)</b></span> are the dominating ones that I picked because I think they suit well the playful vibe of a donut café. I have also taken into account to choose colors that have sufficient contrast in relation to each other, see also ➤ Lighthouse   
<br />
<br />    

# Technologies

- Balsamiq for creating a first wireframe  
- HTML & CSS for creating and styling the homepage  
- Lighthouse for checks on performance, accessibility, best practices and SEO  
- Dev Tools for analyzing the homepage and checking responsiveness on different screen sizes

# Features 

## Existing Features

### Navigation Bar

  - The header includes both the name of the café as well as a navigation bar. It has the function to give a quick overview of the homepages' content making it easy to navigate back and forth. Clicking the individual section titles in the navigation bar will lead the user to the respective content section of the homepage so they do not have to scroll all the way. It also features three social media icons (Facebook, Instagram and TikTok) that open in a new tab when clicked. When a user hovers over the header elements they will get a color change feedback from white to soft pink. The nagivation bar is part of the sticky header at the top of the page. It is visible all the time even when a user scrolls down which makes it possible to nagivage back to a respective section without having to scroll all the way to the top. Hovering over the navigation bar elements gives the user a feedback by changing color from white to soft pink so they better see where their cursor currently is.

![A screenshot of the navigation bar on the Sticky Donuts homepage](assets/readme-assets/navigation-bar.png)

### Delicious Vegan Donuts in Leipzig Section

  - The first section includes a concise heading, an introductory text as well as a picture with three delicious looking donuts that catch the users' attention. The purpose is to welcome the user and to give a quick overview:  
  
    * *Where is the café located?* Leipzig-Plagwitz
    * *What can you get there?* Vegan homemade donuts
    * A reference to the donut and drinks section below for more information 

![A screenshot of the Vegan Donuts in Leipzig section on the Sticky Donuts homepage](assets/readme-assets/vegan-donuts-in-leipzig.png)

### Our Donuts Section

  - The second section is called "Our Donuts" and presents the donut variations the café has to offer. To the top left there is a picture of four donuts and to the right of the picture a list of the different donut variations including mention of monthly changing special donuts. The purpose of the picture and list is to show the donut variety and to make the user curious about trying all the different styles. Below this paragraph there is a picture of the current donut of the month to the right side with a text to the left describing its components in detail. This paragraph is meant to highlight and give more detailed information about this special donut which is presented separately in a visual pleasing manner. Towards the end of the section there is additional information targeted at customers who might have certain allergies. This is supposed to convey transparency regarding the ingredients and the message that there potentially is something available for everyone.  

![A screenshot of the first part of the Our Donuts section on the Sticky Donuts homepage](assets/readme-assets/our-donuts-1.png)
![A screenshot of the second part of the Our Donuts section on the Sticky Donuts homepage](assets/readme-assets/our-donuts-2.png)

### Drinks Section

  - The third section is called "Drinks" and gives an overview of choices. To the left there are three different categories: Autumn specials, tea and coffee. Each of these include a listing of the different types or flavors. To the right there is a picture of a cappucchino. This section is meant to present the variety of drink choices and let the customer know that there is something available to satisfy the thirst after a sweet donut.  

![A screenshot of the Drinks section on the Sticky Donuts homepage](assets/readme-assets/drinks-section.png)

### The Footer: Contact

  - The footer section is called "Contact" and meant to give information about the location and opening times of the café as well as the different ways of getting in touch. At this point the user might be curious about trying some donuts and wants to know how to get there or how to get in touch should there be any questions left unanswered.
  
  - To easier get an idea of where the café is located there is a "Where to find us" heading and an embedded Google map. Below the user will find the address as well as a telephone number and e-mail address. The latter two are both accompanied by a phone and email icon to the left. They are also highlighted with an underline so they stick out from the rest of the text. This visually shows that both elements are clickable - when hovering over them the underline disappears and clicking on them will open new windows, either to the users email program or to a tool enabling direct phone calls. Those two elements should make it easier / more convenient to get in touch.   

  - The next part of the contact section is about the "Opening Times" presented in a table. It is supposed to show when the café can be visited - the table format is used to structure the information in a visual way to be able to recognize the opening times at first glance.

  - The last part of the footer is the "Get in Touch" section which is supposed to make it easier to get in touch with the café owners. There is a name and e-mail address field as well as a textarea below. Above the textarea it says "We would love to hear from you!" which should encourage the user to write a message. Below those text areas there is a "Send" button that gives feedback by changing color from white to soft pink when hovered over. The message can only be sent if the user has entered information in all text fields, otherwise there is a pop-up window telling the user "Please fill out this field". Should a user enter a non-email address in the email address field the pop-up window says "Please enter an email address". 

![A screenshot of the contact section of the Sticky Donuts homepage](assets/readme-assets/contact-section.png)

## Features Left to Implement

- An integrated menu showing prices
- Small information windows when hovering over the individual donut names showing a dedicated picture and description of donut features; or:
- Showing and describing the single donuts in more detail, possibly with allergens, as a fixed part of the homepage
- A form to make a pre-order for donut boxes to pick up (or maybe even to order from a donut delivery service with an integrated payment system)

# Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

## Validator Testing

- I confirm that no errors were returned when passing through the official [W3C validator](link)
<br /><br />
![A screenshot of the HTML W3C Validator result](assets/readme-assets/html-validator.png)  

- I confirm that no errors were returned when passing through the official [(Jigsaw) validator](link)
<br /><br />
![A screenshot of the CSS Jigsaw Validator result](assets/readme-assets/css-validator.png)

## Lighthouse

![A screenshot of the Sticky Donuts homepages' Lighthouse score- Performance 94%, Accessibility 100%, Best Practices 92%, SEO 100%](assets/readme-assets/lighthouse-score.png)

## Bugs & Problems

- For a while the W3C Markup Validation Service showed an error by pointing to a stray ```</p>``` when there apparently was no starting ```<p>```. I was quite confused because there clearly was a starting ```<p>```. It took a while for me to figure out that the issue was a nested list inside the ```<p>``` tag which is not valid code.

## Unfixed Bugs

- No unfixed bugs.

# Deployment

The Sticky Donuts homepage was deployed through GitHub Pages. 
- From the main project page on GitHub, navigate to *Settings*
- On the left side click on *Pages*
- Choose *Deploy from a branch*
- Set the branch to *main* and */ (root) and click on *Save* 
- After a few moments the live link shows at the top of the page.

It can be found here: https://rafaela-wetzel.github.io/Sticky-Donuts/

# Credits 

## Tutorials 

- How to [center content](https://www.computerhope.com/issues/ch001968.htm) within a table
- How to add [letter spacing](https://www.geeksforgeeks.org/how-to-set-letter-spacing-using-css/)
- How to use [scroll-margin-top](https://www.w3schools.com/cssref/css_pr_scroll-margin-top.php)  
- How to make an [e-mail address clickable](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_mailto)
- How to make a [phone number clickable](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_phoneto)

## Media

- The icon in the tab bar was taken from [Icons8](https://icons8.com/icon/YFWa9iouLqLa/donut)
- The icons in the navigation menu, phone & email were taken from [Font Awesome](https://fontawesome.com/)
- The queer flag icon was taken from [Flaticon](https://www.flaticon.com/free-icons/lgbt) 
- The donut stock picture was taken from [Unsplash](https://unsplash.com/de/@amr_taha)  
- The cappucchino stock picture was taken from [Unsplash](https://unsplash.com/de/fotos/WdJ_5Txrg7k)  

## Acknowledgements

- Help and feedback from my mentor Oluwafemi Medale
- README.md structure taken from [Anjalee Kulasinghe](https://github.com/anjalee-kulasinghe/portfolio-project1-cv-website/blob/main/README.md)