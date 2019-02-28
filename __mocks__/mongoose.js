class CommentMock {
  constructor(props) {
    this.props = props;
  }

  async create() {
    return this.props;
  }

  async find() {
    return [{ user: "user", message: "message" }]
  }

  static async exec() {
    return result;
  }
}

class SchemaStub {
  index() {}
  pre() {}
}

class DocumentStub {

}

const moongooseMock = {
  connect() {},

  model(name) {
    const mocks = {
      Comment: CommentMock
    };
    return new mocks[name];
  },

  Schema: SchemaStub,
  Document: DocumentStub,
  HookNextFunction: () => {}
};

module.exports = moongooseMock;
