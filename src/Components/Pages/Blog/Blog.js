import React from 'react';
import { useTitle } from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='flex justify-center items-center my-20'>
            <div>
                <div className='border border-primary border-spacing-2 rounded-lg p-10 mb-5'>
                    <h2 className="text-2xl text-primary font-bold">What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:
                        <span>1.Local state:  local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs</span><br />
                        <span>2.Global state: Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</span><br />
                        <span>3.Server state: Data that comes from an external server that must be integrated with our UI state.</span>
                        <span>4.URL state:  Data that exists on our URLs, including the pathname and query parameters.</span>
                    </p>
                </div>
                <div className='border border-primary border-spacing-2 rounded-lg p-10 mb-5'>
                    <h2 className="text-2xl text-primary font-bold">How does prototype inheritance work?</h2>
                    <p>
                        Image result for How does prototypical inheritance work?
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                </div>
                <div className='border border-primary border-spacing-2 rounded-lg p-10 mb-5'>
                    <h2 className="text-2xl text-primary font-bold">What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
                <div className='border border-primary border-spacing-2 rounded-lg p-10 mb-5'>
                    <h2 className="text-2xl text-primary font-bold">React vs. Angular vs. Vue?</h2>
                    <p>
                        <strong>React</strong> is one of the most popular JavaScript projects with 160k stars on GitHub. It's developed and maintained by Facebook, and it's used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith's usage statistics.
                    </p><br />
                    <p>
                        <strong>Vue</strong> has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You. It's a very strong, independent project in the open-source community and is used by over 1 million websites, according to BuiltWith.
                    </p><br />
                    <p>
                        <strong>Angular</strong> is developed by Google, but surprisingly it's not used in some of their flagship products such as Search or Youtube. It's often used in enterprise projects, and it powers over 97,000 websites based on BuiltWith's data.It's the least starred among the three frameworks, with 68k stars on GitHub. However, when switching from Angular 1 to Angular 2, they created an entirely new repository instead of continuing the AngularJS project, which also has 59k stars.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Blog;