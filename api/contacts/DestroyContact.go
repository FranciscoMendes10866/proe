package contacts

import (
	"context"

	"github.com/FranciscoMendes10866/proe/api/db"
	"github.com/gofiber/fiber/v2"
)

// DestroyContacts ...
func DestroyContacts(c *fiber.Ctx) error {
	// Prisma Client
	prisma := db.NewClient()
	err := prisma.Connect()
	if err != nil {
		return err
	}
	defer func() {
		err := prisma.Disconnect()
		if err != nil {
			panic(err)
		}
	}()
	ctx := context.Background()
	// contact ID
	contactID := c.Params("id")
	// delete method
	destroy, err := prisma.Contacts.FindOne(
		db.Contacts.ID.Equals(contactID),
	).Delete().Exec(ctx)
	if err != nil {
		panic(err)
	}
	// response
	return c.JSON(destroy.ID)
}
