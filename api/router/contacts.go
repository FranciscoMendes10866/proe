package router

import (
	"github.com/FranciscoMendes10866/proe/api/contacts"
	"github.com/FranciscoMendes10866/proe/api/guards"
	"github.com/gofiber/fiber/v2"
)

// ContactsRouter ...
func ContactsRouter(app *fiber.App) {
	api := app.Group("/api/v1/contacts")
	api.Post("/", guards.Protected(), contacts.CreateContact)
	api.Get("/", guards.Protected(), contacts.FindContacts)
	api.Put("/:id", guards.Protected(), contacts.UpdateContacts)
	api.Delete("/:id", guards.Protected(), contacts.DestroyContacts)
}
