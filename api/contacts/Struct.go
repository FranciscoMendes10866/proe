package contacts

type Contacts struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	Picture string `json:"picture"`
	Device  string `json:"device"`
	Number  string `json:"number"`
	UserID  string `json:"userId"`
}
