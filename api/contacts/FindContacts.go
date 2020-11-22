package contacts

import (
	"context"

	"github.com/FranciscoMendes10866/proe/api/db"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// FindContacts ...
func FindContacts(c *fiber.Ctx) error {
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
	// token payload
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(string)
	// database query
	query, err := prisma.Contacts.FindMany(
		db.Contacts.UserID.Equals(tokenID),
	).Exec(ctx)
	if err != nil {
		panic(err)
	}
	// response
	return c.JSON(query)
}
