import React from "react";

import { Button } from "../../../../common";

export function EmptyCourseList() {
  return (
    <div data-testid="emptyContainer">
      <h1>Your List Is Empty</h1>
      <p>Please use 'Add New Course' button to add your first course</p>
      <Button buttonText={"ADD NEW COURSE"} data-testid="addCourse"></Button>
    </div>
  );
}
