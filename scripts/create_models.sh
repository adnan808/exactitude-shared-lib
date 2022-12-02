#!/bin/bash

TABLES=''


source ./scripts/_core.sh

echo $(printf "Dir for create models: ${COLOR_TEXT} $BASE_DIR ${COLOR_END}");

for table in $TABLES; do
item=$(echo "$table" | sed 's/_/-/g')
model=$(echo $table | perl -pe 's/(^|_)./uc($&)/ge;s/_//g')
echo $(printf "Model created: ${COLOR_TEXT}$model${COLOR_END}")
cat << Template > "$BASE_DIR/$item.model.ts"
import { 
  Model, Column, Relation, Table, relationTypes, columnTypes, 
} from 'nestjs-objection';

@Table({ tableName: '$table' })
export class $model extends Model {
  
}
Template
done;
