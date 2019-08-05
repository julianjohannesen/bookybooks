import React from "react";
import { create } from "react-test-renderer";

import Search from '../pages/Search'

describe("Search component", () => {

    // Match the snapshot
  test("Matches the snapshot", () => {
    const search = create(<Search />);
    expect(search.toJSON()).toMatchSnapshot();
  });
});