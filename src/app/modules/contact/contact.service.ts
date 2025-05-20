import { Contact } from "./contact.model";
import { IContact } from "./contact.interface";
import { EmailHelper } from "../../helpers/emailHelper";

const createContactMessage = async (data: IContact) => {
  const result = await Contact.create(data);
  const html = await EmailHelper.createEmailContent(data, 'contact')
  await EmailHelper.sendEmail(
    'support@sumonray.com',
    html,
    'New Contact Message'
  );
  return result;
};

const getAllMessages = async () => {
  return await Contact.find();
};

const deleteMessage = async (id: string) => {
  return await Contact.findByIdAndDelete(id);
};

export const contactService = {
  createContactMessage,
  getAllMessages,
  deleteMessage,
};
