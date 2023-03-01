import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true, collection: 'newss'})
export class News extends Document {
    @Prop()
    title: string;

    @Prop()
    category: string

    @Prop()
    description: string

    @Prop()
    imagelink: string
}

export const NewsSchema = SchemaFactory.createForClass(News);