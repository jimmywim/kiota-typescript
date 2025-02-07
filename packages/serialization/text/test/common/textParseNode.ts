import { assert } from "chai";
import { TextParseNode } from "../../src/index";
import { v1 as uuidv1, v4 as uuidv4, v5 as uuidv5} from 'uuid';

describe("textParseNode", () => {
  it("textParseNode", async () => {
    const textParseNode = new TextParseNode("Test");
    assert.isDefined(textParseNode);
  });

  it("parses guid values", async () => {
    const emptyGuidParseNode = new TextParseNode("00000000-0000-0000-0000-000000000000");
    assert.isDefined(emptyGuidParseNode);
    assert.isDefined(emptyGuidParseNode.getGuidValue());
    const invalidGuidParseNode = new TextParseNode("invalid-guid-value");
    assert.isUndefined(invalidGuidParseNode.getGuidValue());
    // check V1 guid
    const v1 = uuidv1();
    const v1Guid = new TextParseNode(v1);
    assert.isDefined(v1Guid.getGuidValue());
    // check v4 guid
    const v4 = uuidv4();
    const v4Guid = new TextParseNode(v4);
    assert.isDefined(v4Guid.getGuidValue());
    // check v5 guid
    const v5 = uuidv5("example.com", uuidv5.URL);
    const v5Guid = new TextParseNode(v5);
    assert.isDefined(v5Guid.getGuidValue());
  });
});
