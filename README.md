#stretchNav.js#

##### Table of Contents
- [Description](#description)
- [How to install](#how-to-install)
- [How to use](#how-to-use)
- [Arguments](#arguments)
- [To do list](#to-do-list)
- [Feedback](#feedback)

==========
##Description##

This is a straight forward jQuery plugin to easily make navigations stretch to fill their container, it allows you to effect margin or padding and decide which element to apply these to; for example you may want to add margin to the sides of the list elements, or alternatively apply padding to the anchor elements.

The plugin will automatically recalculate values when the window resizes, so it works great for responsive layouts!

This plugin also contains options to modify it's output further, such as not applying the padding/margin to the ends of the navigation.

##How to install##

All you need to do is place the 'stretchNav.js' in a location of your choosing and then include it in the <head> of your document like:
```html
  <script type="text/javascript" src="/stretchNav.js" />
```
Be sure to include jQuery first!

##How to use##

Once you have included jQuery and stretchNav.js, you can initiliase it using the defaults by doing the following:

```js
  $( 'nav ul' ).stretchNav();
```
See 'Arguments' below for further options.

##Arguments##

The following is a list of arguments and their defaults, preset into the stretchNav function so you can simply copy and paste it and change the values.

```js
	$( 'nav ul' ).stretchNav({
		applyEnds: false,	// Whether or not to add the same space to the end
		target: 'li',		// The element to target, could be "> li > a"
		mode: 'margin',		// Can be margin or padding
		round: true,		// Whether or not to round the value down
		threshold: 100		// How long to wait before recalculating on resize	
	});
```

##To do list##

Currently there is not a lot we'd like to do to this further, but if you have any suggestions or problems open an issue and we'll see what we can do for you :)

##Feedback##

Pull requests would be greatly appreciated for any improvements, and please report any issues.

Feel free to contact the team on developers@lightbox-design.co.uk to provide us with any feedback, or if you just fancy a chat.