# Contributing to VSLR UI Kit

Thanks for being willing to contribute. Together we can all make our shared product better. Yay.

## Did you find a bug?

* **Ensure that the bug has not already been reported.** We try to track of issues on [Github](https://github.com/vivintsolar-oss/react-native-components/issues).
* If you're unable to find an open issue addressing the problem, open a new one on [Github](https://github.com/vivintsolar-oss/react-native-components/issues/new). Be sure to include a title and clear description, as much relevant information as possible, and a **code sample** or an **executable test case**.

## Did you write code for a feature, bug, etc.

* Open a new Gitub pull request with the patch.
* The PR template will outline all of the questions that a contributor should ask themself before asking a codeowner to review their PR for approval
* Check off each item in the PR template checklist whether it applies or not as a sign that you've considered the question and complied appropriately for your contribution
* If you want preliminary review of your ideas, feel free to slack a code owner, too.
* When you're ready for a formal review, slack a code owner

## Do you have questions

* Ask [them](https://github.com/vivintsolar-oss/react-native-components.github/CODEOWNERS). Slack a code owner

## Have undocumented answers?

* Answer them. Help update the documentation.

## Contributing Code

### Submitting Changes

Please create a [Github Pull Request](https://github.com/vivintsolar-oss/react-native-components/pull/new/master). We've provided a template, and ask that you fill it out completely.

A submitted pull request (and subsequent commits to it) will rerun the [Jenkins build](https://build2.vivintsolar.com/blue/organizations/jenkins/customer-app/activity), which runs the tests. There is a hard requirement on passing those tests before any merging can happen.

### Coding Conventions

This code style is super opinionated, and we ask that you keep it consistent. There is an included `.eslintrc` file, and we encourage you to enable eslint while making changes so that you won't have to make a lot of linting fixes later.

### Testing

Ideally we should be testing the right things, and testing all of them. As is, it's not perfect yet, but you can help. If there's a bug, write a test that proves it, and then make the test pass.
