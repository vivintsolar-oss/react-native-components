# Generator

## What is this thing
This is a tool that we can use to reduce boilerplate, standardize the code base, promote standards and good practices.
It uses [plopjs](https://plopjs.com) to ask questions and generate files accordingly.

## Using the generator
1. Run `yarn generate`
1. Choose a component type, e.g. "Stateless Function"
1. Give your component a name, e.g. "HeroButton"

This will generate folder under `/packages` containing the component, a storybook story, and a `/tests` dir.  The published package name will be prefixed and be kebab-case, e.g. `HeroButton` -> `@vivintsolar-oss/native-hero-button`

## Adding to the generator
To add more goodies to the generator all you will need to do is write your [plopfile](https://plopjs.com/documentation/#your-first-plopfile). This is where you ask the user for information about the code they are trying to generate. Then you add the template for your plopfile. The templates leverage [{{handlebars}}](https://handlebarsjs.com/) to do something meaningful with the information gathered by your prompts.

## Credit
@braxtonchristensen