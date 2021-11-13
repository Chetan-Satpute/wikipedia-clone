import React, { FC } from "react";
import Page, { PageHeader } from "../components/Page";

const Saved: FC = () => {
  return (
    <Page>
      <PageHeader>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Saved</h1>
          <span>
            <button className="material-icons-outlined mx-5">
              find_in_page
            </button>
            <button className="material-icons">more_vert</button>
          </span>
        </div>
      </PageHeader>
    </Page>
  );
};

export default Saved;
