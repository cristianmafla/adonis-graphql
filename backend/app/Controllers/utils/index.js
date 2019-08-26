module.exports = {
  validateMethod: ({ context, data }) => {
    if(context.request){
      context.response.status(200).json(data);
    }else{
      return data;
    }
  },
  catchError: ({ context, error }) => {
    console.log('ERROR :::',{
      name:error.name,
      message:error.message,
      error
    })
    context.response.status(401).json({
      msg:'ocurrio un error',
      name:error.name,
      message:error.message,
      error
    });
  }
};