import { u as useLocation, j as jsxDevRuntimeExports } from "./vendor-9A6JXtmJ.js";
import { s as safePostMessage } from "./main-CRppV_6v.js";
import "./preload-gUuZ1Ujf.js";
const sendBuildPageRequest = (path) => {
  console.log("Sending build page request to parent:", path);
  try {
    safePostMessage(window.parent, {
      type: "build-page-request",
      pathToBuild: path
    });
    console.log("Build page request sent to parent window via secure postMessage");
  } catch (err) {
    console.error("Failed to send build page request to parent:", err);
  }
};
function DevelopmentNotFound({ path }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      style: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: "1rem"
      },
      "data-dev-file": "/app/dev-tools/src/PageNotFound.tsx",
      "data-dev-line": 29,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          style: {
            maxWidth: "56rem",
            margin: "0 auto",
            textAlign: "center"
          },
          "data-dev-file": "/app/dev-tools/src/PageNotFound.tsx",
          "data-dev-line": 39,
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "h1",
              {
                style: {
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#dc2626",
                  marginBottom: "1rem"
                },
                "data-dev-file": "/app/dev-tools/src/PageNotFound.tsx",
                "data-dev-line": 46,
                children: "Page doesn't exist"
              },
              void 0,
              false,
              {
                fileName: "/app/dev-tools/src/PageNotFound.tsx",
                lineNumber: 46,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "pre",
              {
                style: {
                  color: "#6b7280",
                  marginBottom: "1.5rem",
                  backgroundColor: "#f3f4f6",
                  padding: "1rem",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  whiteSpace: "pre-wrap",
                  textAlign: "left",
                  maxWidth: "100%",
                  fontFamily: "monospace"
                },
                "data-dev-file": "/app/dev-tools/src/PageNotFound.tsx",
                "data-dev-line": 57,
                children: `The page "${path}" hasn't been created yet.

You can ask Airo to build this page for you.`
              },
              void 0,
              false,
              {
                fileName: "/app/dev-tools/src/PageNotFound.tsx",
                lineNumber: 57,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { style: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }, "data-dev-file": "/app/dev-tools/src/PageNotFound.tsx", "data-dev-line": 74, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => sendBuildPageRequest(path),
                style: {
                  backgroundColor: "#6b46c1",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease-in-out",
                  fontSize: "0.875rem",
                  fontWeight: "500"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.backgroundColor = "#5a32b0";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.backgroundColor = "#6b46c1";
                },
                "data-dev-file": "/app/dev-tools/src/PageNotFound.tsx",
                "data-dev-line": 75,
                children: "Build this page"
              },
              void 0,
              false,
              {
                fileName: "/app/dev-tools/src/PageNotFound.tsx",
                lineNumber: 75,
                columnNumber: 11
              },
              this
            ) }, void 0, false, {
              fileName: "/app/dev-tools/src/PageNotFound.tsx",
              lineNumber: 74,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/dev-tools/src/PageNotFound.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "/app/dev-tools/src/PageNotFound.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
function NotFoundPage() {
  const location = useLocation();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DevelopmentNotFound, { path: location.pathname, "data-dev-file": "/app/dev-tools/src/PageNotFound.tsx", "data-dev-line": 113 }, void 0, false, {
    fileName: "/app/dev-tools/src/PageNotFound.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
}
export {
  NotFoundPage as default
};
