async function saveModel(request, model, CREATE, UPDATE) {
  const { id } = model || '0';
  delete model.id;

  const variables = {
    id,
    input: { ...model },
  };

  let GGQL = CREATE;
  if (id !== '0') {
    GGQL = UPDATE;
  }

  const result = await request.request(GGQL, variables);
  return Object.values(result)[0];
}

export { saveModel };
