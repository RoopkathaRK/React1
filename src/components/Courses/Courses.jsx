import React from "react";

import styles from "./styles.module.css";

import { Input } from "../../common/Input/Input";

import { Button } from "../../common/Button/Button";

import { CourseCard } from "./components";

import { EmptyCourseList } from "./components/EmptyCourseList/EmptyCourseList";

// Module 1:
// * render list of components using 'CourseCard' component for each course
// * render 'ADD NEW COURSE' button (reuse Button component)
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-1/home-task/components#courses-component
// * render EmptyCourseList component when no courses
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-1/home-task/components#emptycourselist-component
// * DO NOT map authors to the course inside Courses.jsx component (DO it inside CourseCard)

// Module 2:
// * render this component by route '/courses'
// * navigate to this component if 'localStorage' contains user's token
// * navigate to the route courses/add by clicking Add New Course button.
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-2/home-task/components#courses

// Module 3:
// * stop using mocked courses and authors data
// * delete props 'coursesList' and 'authorsList'
// * use useSelector to get courses and authors from the store
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-3/home-task/components#courses-component

// Module 4:
// navigate to '/courses/add' route by clicking 'ADD NEW COURSE' button in the 'EmptyCourseList'.
// show message 'You don't have permissions to create a course. Please log in as ADMIN' by clicking ADD NEW COURSE button in the 'EmptyCourseList'.
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-4/home-task/components#emptycourselist-component

// Module 5:
// * proposed cases for unit tests:
//   ** Courses should display amount of CourseCard equal length of courses array.
//   ** CourseForm should be shown after a click on the "Add new course" button.

export const Courses = ({ coursesList, authorsList, handleShowCourse }) => {
  // write your code here

  // for EmptyCourseList component container use data-testid="emptyContainer" attribute
  // for button in EmptyCourseList component add data-testid="addCourse" attribute
  if (coursesList && coursesList.length > 0) {
    return (
      <>
        <div className={styles.panel}>
          <Input />
          <Button buttonText={"SEARCH"} />
          <Button buttonText={"ADD NEW COURSE"} />
          {/* // reuse Button component for 'ADD NEW COURSE' button */}
        </div>
        {coursesList.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            authorsList={authorsList
              .filter((author) => course.authors.includes(author.id))
              .map((a) => a)}
            handleShowCourse={handleShowCourse}
          />
        ))}
        {/* // use '.map' array method to render all courses. Use CourseCard component */}
      </>
    );
  } else {
    return <EmptyCourseList />;
  }
};
