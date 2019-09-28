import { ok } from "assert"
import { networkInterfaces } from "os"

mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-kmy6c.mongodb.net:27017,cluster0-shard-00-01-kmy6c.mongodb.net:27017,cluster0-shard-00-02-kmy6c.mongodb.net:27017 --ssl --username admin --password 26031998boxe@ --authenticationDatabase admin --db carrinho --collection mkt1 --type csv --headerline --file  EANdosprodutosv3.csv


mkt1 - ok
mkt2 - ok
mkt3 - nok 
mkt4 - nok 
mkt5 - nok 
