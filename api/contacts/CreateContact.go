package contacts

import (
	"context"

	"github.com/FranciscoMendes10866/proe/api/db"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// CreateContact ...
func CreateContact(c *fiber.Ctx) error {
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
	// User Input
	body := new(Contacts)
	c.BodyParser(body)
	// token payload
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(string)
	// adds the user_id to the object
	body.UserID = tokenID
	// creates a new address
	created, err := prisma.Contacts.CreateOne(
		db.Contacts.Name.Set(body.Name),
		db.Contacts.Picture.Set(body.Picture),
		db.Contacts.Device.Set(body.Device),
		db.Contacts.Number.Set(body.Number),
		db.Contacts.UserID.Set(body.UserID),
	).Exec(ctx)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	// Response
	return c.JSON(created)
}
