package auth

import (
	"context"

	"github.com/FranciscoMendes10866/proe/api/db"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

// SignUp ...
func SignUp(c *fiber.Ctx) error {
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
	body := new(User)
	c.BodyParser(body)
	// hashes the User password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 4)
	if err != nil {
		return c.SendStatus(500)
	}
	// exchanges the given password with the hashed password
	body.Password = string(hash)
	// creates a new user
	create, err := prisma.User.CreateOne(
		db.User.Username.Set(body.Username),
		db.User.Email.Set(body.Email),
		db.User.Password.Set(body.Password),
	).Exec(ctx)
	if err != nil {
		return c.SendStatus(500)
	}
	var response User
	response = User{
		ID:       create.ID,
		Username: create.Username,
	}
	// Create token
	token := jwt.New(jwt.SigningMethodHS256)
	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["id"] = response.ID
	// Generate encoded token and send it as response.
	registerToken, err := token.SignedString([]byte("iwD6BUwQg9nCtIu7tRbYQAxjwX"))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	// Response
	return c.JSON(fiber.Map{
		"token":    registerToken,
		"username": response.Username,
	})
}
