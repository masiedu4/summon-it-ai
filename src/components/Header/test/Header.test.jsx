/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/09/2022 - 18:09:34
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import { describe, expect, it } from "vitest";

import { render, screen } from "../../../../test-utils";
import Header from "../Header";

describe("Header", () => {
  it("should render title in header element", async () => {
    render(<Header title={"SummonIt News AI"} />);
    const titleElement = screen.findAllByText(/SummonIt News AI/i);
    expect(titleElement).toBeTruthy();
  });

  it("should render description in header element", async () => {
    render(<Header description={"Welcome"} />);
    const descriptionElement = screen.findAllByText(/welcome/i);
    expect(descriptionElement).toBeTruthy();
  });
});
