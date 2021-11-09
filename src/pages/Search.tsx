import React, { FC } from "react";
import Page, { PageBody, PageHeader } from "../components/Page";

const Search: FC = () => {
  return (
    <Page>
      <PageHeader>
        <h1 className="font-bold text-2xl">Search</h1>
      </PageHeader>
      <PageBody></PageBody>
    </Page>
  );
};

export default Search;
