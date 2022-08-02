import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  url: string;

  @Prop()
  process_date: Date;

  @Prop()
  default_url: string;

   @Prop()
  site: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

