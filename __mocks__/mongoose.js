class ModelMock {
  constructor(props) {
    this.props = props;
  }

  async create() {
    return this.props;
  }

  static async exec() {
    return result;
  }
}

class CommentMock extends ModelMock {
  async find() {
    return [{ user: "user", message: "message" }];
  }
}

class MovieMock extends ModelMock {}

class SchemaStub {
  index() {}
  pre() {}
}

class DocumentStub {}

const moongooseMock = {
  connect() {},

  model(name) {
    const mocks = {
      Comment: CommentMock,
      Movie: MovieMock
    };
    return new mocks[name]();
  },

  Schema: SchemaStub,
  Document: DocumentStub,
  HookNextFunction: () => {}
};

module.exports = moongooseMock;
