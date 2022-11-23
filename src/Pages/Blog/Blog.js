import React from 'react';

const Blog = () => {
    return (
        <div className='mb-40'>
            <h3 className='text-4xl font-bold text-center text-gray-600 my-8'>Some Questions Answer</h3>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-8/12 mx-auto my-2">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?
                </div>
                
  <div className="collapse-content"> 
                    <p><span className='font-bold'>Answer:</span>
                        The Four Kinds of React State to Manage
                        <p>1.Local state.</p>
                        <p>2.Global state.</p>
                        <p>3. Server state.</p>
                        <p>4. URL state.</p>
                    </p>
  </div>
            </div>
            

            <div className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box w-8/12 mx-auto">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
   How does prototypical inheritance work?
  </div>
  <div className="collapse-content"> 
    <p><span className='font-bold'>Answer:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
  </div>
            </div>
            
            <div className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box w-8/12 mx-auto">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What is a unit test? Why should we write unit tests?
  </div>
  <div className="collapse-content"> 
    <p><span className='font-bold'>Answer-Unit Test:</span> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
    <p><span className='font-bold'>Answer- Why should we write unit tests:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
  </div>
     </div>
            <div className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box w-8/12 mx-auto">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  React vs. Angular vs. Vue?
  </div>
  <div className="collapse-content"> 
    <p><span className='font-bold'>Angular:</span> Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.</p>
    <p><span className='font-bold'>React:</span> React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. </p>
    <p><span className='font-bold'>Vue:</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>
  </div>
     </div>
   </div>
    );
};

export default Blog;