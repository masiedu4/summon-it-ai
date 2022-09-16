/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/09/2022 - 18:21:45
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
/* eslint-disable import/export */

import { render } from "@testing-library/react";

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed

    wrapper: ({ children }) => children,

    ...options,
  });

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

// override render export

export { customRender as render };
