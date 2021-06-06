export interface IBaseService{
    findOne(query);
    findById(id:string);
    findAll();
    findAllByQuery(query);
    updateById(id,query);
    deleteById(id)
} 