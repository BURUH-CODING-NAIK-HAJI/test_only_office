"use client";
import React, { useRef } from "react";
import { DocumentEditor } from "@onlyoffice/document-editor-react";

const onDocumentReady = function (event: any) {
  console.log("Document is loaded");
};

const onLoadComponentError = function (
  errorCode: number,
  errorDescription: string
) {
  switch (errorCode) {
    case -1: // Unknown error loading component
      console.log(errorDescription);
      break;

    case -2: // Error load DocsAPI from http://documentserver/
      console.log(errorDescription);
      break;

    case -3: // DocsAPI is not defined
      console.log(errorDescription);
      break;
  }
};

const handleDocumentStateChangeD = (event: object) => {
  console.log(event);
};

export default function OnlyOffice() {
  return (
    <div className="w-full h-[100vh]">
      <DocumentEditor
        id="docxEditor"
        documentServerUrl="http://43.218.226.0:8000"
        config={{
          documentType: "word",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidXJsIjoiaHR0cDovLzQzLjIxOC4yMjYuMDo4MDAwL25ldy5kb2N4IiwicGVybWlzc2lvbnMiOnsiY29tbWVudCI6dHJ1ZSwiY29tbWVudEdyb3VwcyI6eyJlZGl0IjpbIkdyb3VwMiIsIiJdLCJyZW1vdmUiOlsiIl0sInZpZXciOiIifSwiY29weSI6dHJ1ZSwiZGVsZXRlQ29tbWVudEF1dGhvck9ubHkiOnRydWUsImRvd25sb2FkIjp0cnVlLCJlZGl0Ijp0cnVlLCJlZGl0Q29tbWVudEF1dGhvck9ubHkiOnRydWUsImZpbGxGb3JtcyI6dHJ1ZSwibW9kaWZ5Q29udGVudENvbnRyb2wiOnRydWUsIm1vZGlmeUZpbHRlciI6dHJ1ZSwicHJpbnQiOnRydWUsInJldmlldyI6dHJ1ZSwicmV2aWV3R3JvdXBzIjpbIkdyb3VwMSIsIkdyb3VwMiIsIiJdfX0sImVkaXRvckNvbmZpZyI6eyJjYWxsYmFja1VybCI6Imh0dHA6Ly80My4yMTguMTQuNzc6ODAvYXBpL2NhbGxiYWNrL29ubHlvZmZpY2UiLCJtb2RlIjoiZWRpdCIsInVzZXIiOnsiZ3JvdXAiOiJHcm91cDEiLCJpZCI6Ijc4ZTFlODQxIiwibmFtZSI6IlNtaXRoIn19fQ.G2YT-kA58Nz5ch8hT82BFkJQFpEKaNIVzM2b9YPZ3Nc",
          type: "desktop",
          height: "100%",
          width: "100%",
          document: {
            fileType: "docx",
            key: "Khirz6zTPdfd7",
            title: "new.docx",
            url: "http://43.218.226.0:8000/new.docx",
            permissions: {
              comment: true,
              commentGroups: {
                edit: ["Group2", ""],
                remove: [""],
                view: "",
              },
              copy: true,
              deleteCommentAuthorOnly: true,
              download: true,
              edit: true,
              editCommentAuthorOnly: true,
              fillForms: true,
              modifyContentControl: true,
              modifyFilter: true,
              print: true,
              review: true,
              reviewGroups: ["Group1", "Group2", ""],
            },
          },

          editorConfig: {
            callbackUrl: "http://43.218.14.77/api/callback/onlyoffice",
            mode: "edit",
            user: {
              group: "Group1",
              id: "78e1e841",
              name: "Smith",
            },
          },
        }}
        events_onDocumentReady={onDocumentReady}
        onLoadComponentError={onLoadComponentError}
      />
    </div>
  );
}
