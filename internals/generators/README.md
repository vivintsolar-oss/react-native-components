# Generator
## what is this thing
This is a tool that we can use to reduce boilerplate, standardize the code base, promote standards and good practices.
It uses [plopjs](https://plopjs.com) we can write plop files that will ask you questions about what you are trying to accomplish and stub out the files accordingly.

## Using the generator
1. install plop globally `npm install -g plop` (optional but recommended for easy access)
2. run `yarn generate` to get started.

That will show you a list of available generators, you can select one and follow the prompts. You can also by pass the prompts if you know exactly what you want. `yarn generate component` for example will skip the first question in the generator.

## adding to the generator
To add more goodies to the generator all you will need to do is write your [plopfile](https://plopjs.com/documentation/#your-first-plopfile). This is where you ask the user for information about the code they are trying to generate. Then you add the template for your plopfile. The templates leverage [{{handlebars}}](https://handlebarsjs.com/) to do something meaningful with the information gathered by your prompts.

## Credit 
@braxtonchristensen