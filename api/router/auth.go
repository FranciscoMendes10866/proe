package router

import (
	"github.com/FranciscoMendes10866/proe/api/auth"
	"github.com/gofiber/fiber/v2"
)

// AuthRouter ...
func AuthRouter(app *fiber.App) {
	api := app.Group("/api/v1/auth")
	api.Post("/sign_up", auth.SignUp)
	api.Post("/sign_in", auth.SignIn)
}
