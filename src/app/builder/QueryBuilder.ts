import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T>{
    public modelQuery: Query<T[], T>
    public query: Record<string, unknown>

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>){
        this.modelQuery = modelQuery
        this.query = query
    }

    search(searchableFields: string[]){
        const searchTerm =  this?.query?.searchTerm
        if(searchTerm){
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(field => ({
                    [field]: {
                        $regex: searchTerm, $options: 'i'
                    }
                }) as FilterQuery<T>)
            })
        }
        return this
    }

    filter(){
        const queryObj = { ...this.query }
        //filtering
        const excludeFields = ['searchTerm', 'sort', 'page', 'limit', 'fields', 'skip'];
        excludeFields.forEach((el) => delete queryObj[el]);
        // console.log(queryObj)
        if(queryObj!.category){
            const categories = (queryObj!.category as string).split(',')
            this.modelQuery = this.modelQuery.find({category: { $in: categories }} as FilterQuery<T>)
        }
        //console.log(this.modelQuery)
        return this
    }

    sort(){
        const sort = (this?.query?.sort as string)?.split(',')?.join(' ') || '-createdAt'
        this.modelQuery = this.modelQuery.sort(sort as string)

        return this
    }

    paginate(){
        const page = Number(this?.query?.page) || 1
        const limit = Number(this?.query?.limit) || 5
        const skip = (page - 1) * limit

        this.modelQuery = this.modelQuery.skip(skip).limit(limit)

        return this
    }

    fields(){
        const fields = (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v'
        this.modelQuery = this.modelQuery.select(fields)

        return this
    }
}

export default QueryBuilder