# spacex-data-app

The application is based on the _Create React App_ without ejecting it, therefore all the standard npm commands will work.

After installing all the dependencies from the root folder

```
npm i
```

the application itself can be run by

```
npm start
```

and the unit tests suite by

```
npm test
```

## Overview

The application lists information about SpaceX rocket launches using the open SpaceX API: https://docs.spacexdata.com

Initially on start the application requests data about the most recent 50 launches from the back-end. Afterwards all the sorting and filtering is happening on the front-end side.

Each item on the list displays the launch name, date and details. Clicking on buttons at the top allow to sort displayed items by _name_ or by _date_. 
Clicking on the _view rocket details_ link allows to see more information about the launch.
It is also possible to search by the launch name - the search results are presented as filtered version of the request results.

## App structure and data flow

Having seen the _Optional Extras_ section in the task description I was tempted to use Redux for state management and AG Grid for table rendering. After thinking it through, I have decided however not to do it.
The key thing when assessing the architectural approach is usually applying the best tools for a job.
Therefore I decided that setting up store, reducers and actions for such a small application would be an overkill. Especially that we've got much more convenient options, which are more suitable for the size of the task.

I still wanted to maintain a centralised store, therefore I decided to use the _Context_ to fulfill this requirement. I am using _Context_ that is scoped for the Launches component and all its child components.

For the components structure I have followed the convention where for every _container_ component that performs most of the logic, there's always at least one _main_ component that is dumb and get's only data via props. I have also added a few more specialist, smaller components lower in the tree.

They are all communicating via the same _Context_.

When it comes to displaying data, I have also decided eventually to build it on my own. The application is displaying only 50 items, so it's not a huge amount of data and there should be no performance issues with that.

If I went for any existing data-grid libraries, they would definitely have some built-in performance improvements, but with 50 rows it would most likely be a negligible difference.
Additionally, using some beasts like AG Grid would create a temptation to use also their built-in sorting or filtering options and I believe that one of the purposes of this task was to show an ability of dealing with this kind of tasks without a third-party support.

If there's such a request, I am happy to provide a modified version of the app either with Redux or a data-grid library implementation.

## Unit Testing

I could easily spend another couple of hours on adding more and more tests - but, again, I thought that the purpose of this exercise is to show ability to work with different frameworks, following patters and good practices etc. 

Therefore I have applied a couple different approaches to the unit tests: all the components are being tested aginst their snaphots, but additionally the _List_, _Sorting_ and _Search_ components have _Enzyme_ based tests applied.

In unit tests I always try to follow the same, user centric convention, where each segment of the test has its own purpose and they should never be mixed to ensure separation of concerns:

* Every _When_ has either statement of _Given_, _When_ or _And_
* Every _beforeEach()_ contains a setup, reflecting exactly the preceding _describe_
* Every _it()_ contains an assertion ONLY
