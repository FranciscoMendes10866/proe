package router

import (
	"github.com/FranciscoMendes10866/proe/api/contacts"
	"github.com/gofiber/fiber/v2"
)

// ContactsRouter ...
func ContactsRouter(app *fiber.App) {
	api := app.Group("/api/v1/contacts")
	api.Post("/", contacts.CreateContact)
	api.Get("/", contacts.FindContacts)
	api.Put("/", contacts.UpdateContacts)
	api.Delete("/", contacts.DestroyContacts)
}
