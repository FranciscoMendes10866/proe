# Migration `20201122190415-init`

This migration has been generated by FranciscoMendes10866 at 11/22/2020, 8:04:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" text   NOT NULL ,
"email" text   NOT NULL ,
"password" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Contacts" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
"picture" text   NOT NULL ,
"device" text   NOT NULL ,
"number" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

CREATE UNIQUE INDEX "Contacts.number_unique" ON "public"."Contacts"("number")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201122190415-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,22 @@
+datasource db {
+    provider = "postgresql"
+    url = "***"
+}
+
+generator db {
+    provider = "go run github.com/prisma/prisma-client-go"
+}
+
+model User {
+    id       String @id @default(uuid())
+    email    String @unique
+    password String
+}
+
+model Contacts {
+    id      String @id @default(uuid())
+    name    String
+    picture String
+    device  String
+    number  String @unique
+}
```


