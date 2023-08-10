import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ArticleImage } from 'src/objects/article/articleImage';
import { ArticleLabel } from 'src/objects/article/articleLabel';
import { DataSheetPdf } from 'src/objects/dataSheetPdf';
import { Article } from 'src/objects/article/article';
import { Ticket } from 'src/objects/ticket/ticket';
import { TicketFaq } from 'src/objects/ticket/ticketFaq';
import { TicketChannel } from 'src/objects/ticket/ticketChannel';
import { Title } from 'src/objects/title';
import { Translation } from 'src/objects/translation';
import { Shipment } from 'src/objects/shipment/shipment';
import { Unit } from 'src/objects/unit';
import { Tag } from 'src/objects/tag';
import { Supplier } from 'src/objects/shipment/supplier';
import { ShippingCarrier } from 'src/objects/shipment/shippingCarrier';
import { CustomerTopic } from 'src/objects/customer/customerTopic';
import { Customer } from 'src/objects/customer/customer';
import { User } from 'src/objects/user';
import { CustomerCategory } from 'src/objects/customer/customerCategory';
import { Currency } from 'src/objects/currency';
import { Contract } from 'src/objects/contract';

@Injectable({
  providedIn: 'root'
})
export class WeclappService {
  private apiUrl = 'https://development24.weclapp.com/webapp/api/v1/';

  constructor(private httpClient: HttpClient) {}

  /**
   * Returns all customers.
   */
  getAllCustomers(): Observable<Customer[]> {
    const response = this.httpClient.get<Customer[]>(`${this.apiUrl}/customer`);
    console.log(response);
    return response;
  }
  /**
   * Returns a customer based on an ID.
   */
  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiUrl}/customer/${id}`);
  }
  /**
   * Creates a customer.
   */
  createCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`${this.apiUrl}/customer`, customer);
  }
  /**
   * Updates an existing customer.
   */
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.apiUrl}/customer`, customer);
  }
  /**
   * Deletes an existing customer.
   */
  deleteCustomerById(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.apiUrl}/customer/${id}`);
  }
  /**
   * Returns customer topics.
   */
  getCustomerTopics(): Observable<CustomerTopic[]> {
    return this.httpClient.get<CustomerTopic[]>(`${this.apiUrl}/customerTopic`);
  }
  /**
   * Returns the amount of customer topics.
   */
  getCustomerTopicsCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/customerTopic/count`);
  }
  /**
   * Returns a custome topic based on an ID.
   */
  getCustomerTopicById(id: number): Observable<CustomerTopic> {
    return this.httpClient.get<CustomerTopic>(`${this.apiUrl}/customerTopic/id/${id}`);
  }
  /**
   * Creates a customer topic.
   */
  createCustomerTopic(customerTopic: CustomerTopic): Observable<CustomerTopic> {
    return this.httpClient.post<CustomerTopic>(`${this.apiUrl}/customerTopic`, customerTopic);
  }
  /**
   * Updates an existing customer topic.
   */
  updateCustomerTopic(customerTopic: CustomerTopic): Observable<CustomerTopic> {
    return this.httpClient.put<CustomerTopic>(`${this.apiUrl}/customerTopic/id/${customerTopic.id}`, customerTopic);
  }
  /**
   * Deletes an existing customer topic.
   */
  deleteCustomerTopicById(id: number): Observable<CustomerTopic> {
    return this.httpClient.delete<CustomerTopic>(`${this.apiUrl}/customerTopic/id/${id}`);
  }
  /**
   * Returns customer categories.
   */
  getCustomerCategories(): Observable<CustomerCategory[]> {
    return this.httpClient.get<CustomerCategory[]>(`${this.apiUrl}/customerCategory`);
  }
  /**
   * Returns the amount of customer categories.
   */
  getCustomerCategoriesCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/customerCategory/count`);
  }
  /**
   * Returns a customer category based on an ID.
   */
  getCustomerCategoryById(id: number): Observable<CustomerCategory> {
    return this.httpClient.get<CustomerCategory>(`${this.apiUrl}/customerCategory/id/${id}`);
  }
  /**
   * Returns the currencies.
   */
  getCurrencies(): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(`${this.apiUrl}/currency`);
  }
  /**
   * Returns the amount of currencies.
   */
  getCurrenciesCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/currency/count`);
  }
  /**
   * Returns the currency based on an ID.
   */
  getCurrencyById(id: number): Observable<Currency> {
    return this.httpClient.get<Currency>(`${this.apiUrl}/currency/id/${id}`);
  }
  /**
   * Returns the currency of the company.
   */
  getCompanyCurrency(): Observable<Currency> {
    return this.httpClient.get<Currency>(`${this.apiUrl}/currency/companyCurrency`);
  }

  /**
   * Returns all users.
   */
  getAllUsers(): Observable<User[]> {
    const response = this.httpClient.get<User[]>(`${this.apiUrl}/user`);
    console.log(response);
    return response;
  }
  /**
   * Returns an user based on an ID.
   */
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/user/${id}`);
  }
  /**
   * Creates an user.
   */
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/user`, user);
  }
  /**
   * Updates an existing user.
   */
  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/user`, user);
  }
  /**
   * Deletes an existing user based on an ID.
   */
  deleteUserById(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/user/${id}`);
  }

  /**
   * Returns all articles.
   */
  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.apiUrl}/article`);
  }
  /**
   * Returns the amount of articles.
   */
  getArticlesCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/article/count`);
  }
  /**
   * Returns an article based on an ID.
   */
  getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${this.apiUrl}/article/id/${id}`);
  }
  /**
   * Creates a datasheet pdf for an article based on an ID.
   */
  createArticleDatasheetPdfById(dataSheetPdf: DataSheetPdf, id: number): Observable<DataSheetPdf> {
    return this.httpClient.post<DataSheetPdf>(`${this.apiUrl}/article/id/${id}/createDatasheetPdf`, dataSheetPdf);
  }
  /**
   * Creates a label for an article based on an ID.
   */
  createArticleLabelById(articleLabel: ArticleLabel, id: number): Observable<ArticleLabel> {
    return this.httpClient.post<ArticleLabel>(`${this.apiUrl}/article/id/${id}/createLabelPdf`, articleLabel);
  }
  /**
   * Creates an image for an article based on an ID.
   */
  createArticleImageById(articleImage: ArticleImage, id: number): Observable<ArticleImage> {
    return this.httpClient.post<ArticleImage>(`${this.apiUrl}/article/id/${id}/uploadArticleImage`, articleImage);
  }
  /**
   * Returns an image of an articles based on an ID.
   */
  getArticleImageById(id: number): Observable<ArticleImage> {
    return this.httpClient.get<ArticleImage>(`${this.apiUrl}/article/id/${id}/downloadArticleImage`);
  }
  /**
   * Returns the main image of an article based on an ID.
   */
  getMainArticleImageById(id: number): Observable<ArticleImage> {
    return this.httpClient.get<ArticleImage>(`${this.apiUrl}/article/id/${id}/downloadMainArticleImage`);
  }
  /**
   * Deletes an article based on an ID.
   */
  deleteArticleById(id: number): Observable<Object> {
    return this.httpClient.delete<Object>(`${this.apiUrl}/article/id/${id}`);
  }
  
  /**
   * Returns all tickets.
   */
  getAllTickets(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(`${this.apiUrl}/ticket`);
  }
  /**
   * Returns the amount of tickets.
   */
  getTicketsCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/ticket/count`);
  }
  /**
   * Returns a ticket based on an ID.
   */
  getTicketById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(`${this.apiUrl}/ticket/id/${id}`);
  }
  /**
   * Returns the amount of available ticket status.
   */
  getTicketStatusCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/ticketStatus/count`);
  }
  /**
   * Returns ticket faq's.
   */
  getTicketFaqs(): Observable<TicketFaq[]> {
    return this.httpClient.get<TicketFaq[]>(`${this.apiUrl}/ticketFaq`);
  }
  /**
   * Returns the amount of ticket faq's.
   */
  getTicketFaqCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/ticketFaq/count`);
  }
  /**
   * Returns a ticket faq based on an ID.
   */
  getTicketFaqById(id: number): Observable<TicketFaq> {
    return this.httpClient.get<TicketFaq>(`${this.apiUrl}/ticketFaq/id/${id}`);
  }
  /**
   * Creates a ticket faq.
   */
  createTicketFaq(ticketFaq: TicketFaq): Observable<TicketFaq> {
    return this.httpClient.post<TicketFaq>(`${this.apiUrl}/ticketFaq`, ticketFaq);
  }
  /**
   * Deletes a ticket faq based on an ID.
   */
  deleteTicketFaqById(id: number): Observable<TicketFaq> {
    return this.httpClient.delete<TicketFaq>(`${this.apiUrl}/ticketFaq/id/${id}`);
  }
  /**
   * Returns ticket channels.
   */
  getTicketChannels(): Observable<TicketChannel[]> {
    return this.httpClient.get<TicketChannel[]>(`${this.apiUrl}/ticketChannel`);
  }
  /**
   * Returns the amount of ticket channels.
   */
  getTicketChannelCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/ticketChannel/count`);
  }
  /**
   * Returns all titles.
   */
  getAllTitles(): Observable<Title> {
    return this.httpClient.get<Title>(`${this.apiUrl}/title`);
  }
  /**
   * Returns the amount of titles.
   */
  getTitleCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/title/count`);
  }
  /**
   * Returns a title based on an ID.
   */
  getTitleById(id: number): Observable<Title> {
    return this.httpClient.get<Title>(`${this.apiUrl}/title/id/${id}`);
  }
  /**
   * Returns all translations.
   */
  getAllTranslations(): Observable<Translation> {
    return this.httpClient.get<Translation>(`${this.apiUrl}/translation`);
  }
  /**
   * Returns a translation based on an ID.
   */
  getTranslationById(id: number): Observable<Translation> {
    return this.httpClient.get<Translation>(`${this.apiUrl}/translation/id/${id}`);
  }
  /**
   * Returns the amount of translations.
   */
  getTranslationCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/translation/count`);
  }
  
  /**
   * Returns all shipments.
   */
  getAllShipments(): Observable<Shipment[]> {
    return this.httpClient.get<Shipment[]>(`${this.apiUrl}/shipment`);
  }
  /**
   * Returns the amount of shipments.
   */
  getShipmentCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/shipment/count`);
  }
  /**
   * Returns a shipment based on an ID.
   */
  getShipmentById(id: number): Observable<Shipment> {
    return this.httpClient.get<Shipment>(`${this.apiUrl}/shipment/id/${id}`);
  }

  /**
   * Returns all suppliers.
   */
  getAllSuppliers(): Observable<Supplier> {
    return this.httpClient.get<Supplier>(`${this.apiUrl}/supplier`);
  }
  /**
   * Returns the amount of suppliers.
   */
  getSuppliersCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/supplier/count`);
  }
  /**
   * Returns a supplier based on an ID.
   */
  getSupplierById(id: number): Observable<Supplier> {
    return this.httpClient.get<Supplier>(`${this.apiUrl}/supplier/id/${id}`);
  }

  /**
   * Returns all shipping carriers.
   */
  getAllShippingCarriers(): Observable<ShippingCarrier[]> {
    return this.httpClient.get<ShippingCarrier[]>(`${this.apiUrl}/shippingCarrier`);
  }
  /**
   * Returns a shipping carrier based on an ID.
   */
  getShippingCarrierById(id: number): Observable<ShippingCarrier> {
    return this.httpClient.get<ShippingCarrier>(`${this.apiUrl}/shippingCarrier/id/${id}`);
  }
  /**
   * Returns the amount of shipping carriers.
   */
  getShippingCarrierCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/shippingCarrier/count`);
  }

  /**
   * Returns all available units.
   */
  getUnits(): Observable<Unit> {
    return this.httpClient.get<Unit>(`${this.apiUrl}/unit`);
  }
  /**
   * Returns an available unit based on an ID.
   */
  getUnitById(id: number): Observable<Unit> {
    return this.httpClient.get<Unit>(`${this.apiUrl}/unit/${id}`);
  }
  /**
   * Returns the amount of available units.
   */
  getUnitsCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/unit/counter`);
  }

  /**
   * Returns all available tags.
   */
  getTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(`${this.apiUrl}/tag`);
  }
  /**
   * Returns the amount of available tags.
   */
  getTagsCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/tag/count`);
  }
  /**
   * Returns a tag based on an ID.
   */
  getTagById(id: number): Observable<Tag> {
    return this.httpClient.get<Tag>(`${this.apiUrl}/tag/id/${id}`);
  }

  getContracts(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`${this.apiUrl}/contract`);
  }
  getContractById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${this.apiUrl}/contract/id/${id}`);
  }
  getContractsCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/contract/count`);
  }
}