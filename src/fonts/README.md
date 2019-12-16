# Boilerplate Fonts

<hr/>

All font libraries that we have added on this website are free to use. [Google Font](https://fonts.google.com/) uses [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

## Open Sans

Is a google's free font really similar to Helvetica.

https://fonts.google.com/specimen/Open+Sans

## Nunito

Is a google's free font. This font is being used on Beaches Website.

https://fonts.google.com/specimen/Nunito

## Boilerplate Icon Font

This is a San Services customized icon library. We use the iconmoon website which help us generate icon fonts.

https://icomoon.io/

### What is the license for IcoMoon icons/fonts?

There is a license link for each icon pack in IcoMoon's library.
If you are using your own vectors, there are no license requirements for using the IcoMoon app.

### How to add a new Icon?

Instructions:

1. Go to [Iconmoon](https://icomoon.io/app/#/select).
2. Drag and Drop the selection file `./boilerplate-icon-font/selection.json` into the website.

- A modal wiill appear with the following message:
  ```
  Your icon selection was loaded.
  Would you like to load all the settings stored in your selection file?
  ```

3. Click on **Yes**.
4. Drag and Drop any new SVG that you need.
5. Give a semantic name that describes the new icon.
6. Click on the`Generate Font` button, it's located at the bottom right corner.
7. Check your Changes.
8. Click on Download, it's located at the bottom right corner.
9. Unzip the files.
10. Replace the old Icons.
11. Copy the fonts into the boilerplate `cp ./boilerplate-icon-font/fonts/* ./boilerplate-icon-font/`
12. Copy and Replace the icon classes `.icon-* {}` from `./boilerplate-icon-font/style.css` to `/dev/sass/base/_icons.scss`.
13. Commit your changes.
14. Hug yourself.
