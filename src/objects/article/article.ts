import { Tag } from "../tag";

export class Article {
    id!: string;
    version!: string;
    accountId!: string;
    accountNumber!: string;
    accountingCodeId!: string;
    active!: boolean;
    applyCashDiscount!: boolean;
    articleAlternativeQuantities!: ArticleAlternativeQuantity[];
    articleCalculationPrices!: ArticleCalculationPrice[];
    articleCategoryId!: string;
    articleGrossWeight!: string;
    articleHeight!: string;
    articleImages!: ArticleImage[];
    articleLength!: string;
    articleNetWeight!: string;
    articleNumber!: string;
    articlePrices!: ArticlePrice[];
    articleType!: string;
    articleWidth!: string;
    availableForSalesChannels!: string[];
    availableInSale!: boolean;
    averageDeliveryTime!: number;
    barcode!: string;
    batchNumberRequired!: boolean;
    billOfMaterialPartDeliveryPossible!: boolean;
    catalogCode!: string;
    contractBillingCycle!: string;
    contractBillingMode!: string;
    countryOfOriginCode!: string;
    createdDate!: number;
    customerArticleNumbers!: CustomerArticleNumber[];
    customsDescription!: string;
    customsTariffNumber!: string;
    customsTariffNumberId!: string;
    defaultPriceCalculationType!: string;
    defaultWarehouseLevels!: DefaultWarehouseLevel[];
    defineIndividualTaskTemplates!: boolean;
    description!: string;
    ean!: string;
    expenseAccountId!: string;
    expenseAccountNumber!: string;
    expirationDays!: number;
    fixedPurchaseQuantity!: string;
    internalNote!: string;
    invoicingType!: string;
    lastModifiedDate!: number;
    launchDate!: number;
    longText!: string;
    lowLevelCode!: number;
    manufacturerId!: string;
    manufacturerName!: string;
    manufacturerPartNumber!: string;
    marginCalculationPriceType!: string;
    matchCode!: string;
    minimumPurchaseQuantity!: string;
    minimumStockQuantity!: string;
    name!: string;
    plannedWorkingTimePerUnit!: string;
    priceCalculationParameters!: PriceCalculationParameter[];
    procurementLeadDays!: number;
    producerType!: string;
    productionArticle!: boolean;
    productionBillOfMaterialItems!: ProductionBillOfMaterialItem[];
    purchaseCostCenterId!: string;
    purchaseCostCenterNumber!: string;
    quantityConversions!: QuantityConversion[];
    ratingId!: string;
    ratingName!: string;
    recordItemGroupName!: string;
    safetyStockDays!: number;
    salesBillOfMaterialItems!: SalesBillOfMaterialItem[];
    salesCostCenterId!: string;
    salesCostCenterNumber!: string;
    sellByDate!: number;
    sellFromDate!: number;
    serialNumberRequired!: boolean;
    shortDescription1!: string;
    shortDescription2!: string;
    showOnDeliveryNote!: boolean;
    statusId!: string;
    supplySources!: SupplySource[];
    supportUntilDate!: number;
    systemCode!: string;
    tags!: Tag[];
    targetStockQuantity!: string;
    taxRateType!: string;
    unitId!: string;
    unitName!: string;
    useAvailableForSalesChannels!: boolean;
    useSalesBillOfMaterialItemPrices!: boolean;
    useSalesBillOfMaterialItemPricesForPurchase!: boolean;

    constructor(init?:Partial<Article>) {
        Object.assign(this, init);
    }
}

export class ArticleAlternativeQuantity {
    id!: string;
    version!: string;
    createdDate!: number;
    lastModifiedDate!: number;
    minimumOrderQuantity!: string;
    minimumStockQuantity!: string;
    targetStockQuantity!: string;
    warehouseId!: string;
    warehouseName!: string;

    constructor(init?:Partial<ArticleAlternativeQuantity>) {
        Object.assign(this, init);
    }
}

export class ArticleCalculationPrice {
    id!: string;
    version!: string;
    articleCalculationPriceType!: string;
    createdDate!: number;
    endDate!: number;
    lastModifiedDate!: number;
    positionNumber!: number;
    price!: string;
    salesChannel!: string;
    startDate!: number;

    constructor(init?:Partial<ArticleCalculationPrice>) {
        Object.assign(this, init);
    }
}

export class ArticleImage {
    id!: string;
    version!: string;
    createdDate!: number;
    fileName!: string;
    lastModifiedDate!: number;
    mainImage!: boolean;

    constructor(init?:Partial<ArticleImage>) {
        Object.assign(this, init);
    }
}

export class ArticlePrice {
    id!: string;
    version!: string;
    createdDate!: number;
    currencyId!: string;
    currencyName!: string;
    customerId!: string;
    description!: string;
    endDate!: number;
    lastModifiedByUserId!: string;
    lastModifiedDate!: number;
    positionNumber!: number;
    price!: string;
    priceScaleType!: string;
    priceScaleValue!: string;
    reductionAdditions!: ReductionAddition[];
    salesChannel!: string;
    startDate!: number;

    constructor(init?:Partial<ArticlePrice>) {
        Object.assign(this, init);
    }
}

export class ReductionAddition {
    id!: string;
    version!: string;
    createdDate!: number;
    lastModifiedDate!: number;
    name!: string;
    type!: string;
    value!: string;

    constructor(init?:Partial<ReductionAddition>) {
        Object.assign(this, init);
    }
}

export class EntityReference {
    entityId!: string;
    entityName!: string;

    constructor(init?:Partial<EntityReference>) {
        Object.assign(this, init);
    }
}

export class SelectedValue {
    id!: string;

    constructor(init?:Partial<SelectedValue>) {
        Object.assign(this, init);
    }
}

export class CustomerArticleNumber {
    id!: string;
    version!: string;
    createdDate!: number;
    customerArticleNumber!: string;
    customerId!: string;
    lastModifiedDate!: number;

    constructor(init?:Partial<CustomerArticleNumber>) {
        Object.assign(this, init);
    }
}

export class DefaultWarehouseLevel {
    id!: string;

    constructor(init?:Partial<DefaultWarehouseLevel>) {
        Object.assign(this, init);
    }
}

export class PriceCalculationParameter {
    id!: string;
    version!: string;
    createdDate!: number;
    fixSurcharge!: string;
    fromScale!: string;
    lastModifiedDate!: number;
    lowerPurchasePriceBound!: string;
    margin!: string;
    percentSurcharge!: string;
    profit!: string;
    salesChannel!: string;

    constructor(init?:Partial<PriceCalculationParameter>) {
        Object.assign(this, init);
    }
}

export class ProductionBillOfMaterialItem {
    id!: string;
    version!: string;
    articleId!: string;
    articleNumber!: string;
    createdDate!: number;
    lastModifiedDate!: number;
    positionNumber!: number;
    quantity!: string;

    constructor(init?:Partial<ProductionBillOfMaterialItem>) {
        Object.assign(this, init);
    }
}

export class QuantityConversion {
    id!: string;
    version!: string;
    conversionQuantity!: string;
    createdDate!: number;
    createdUserId!: string;
    lastEditedUserId!: string;
    lastModifiedDate!: number;
    oppositeDirection!: boolean;
    unitId!: string;

    constructor(init?:Partial<QuantityConversion>) {
        Object.assign(this, init);
    }
}

export class SalesBillOfMaterialItem {
    id!: string;
    version!: string;
    articleId!: string;
    articleNumber!: string;
    createdDate!: number;
    lastModifiedDate!: number;
    positionNumber!: number;
    quantity!: string;

    constructor(init?:Partial<SalesBillOfMaterialItem>) {
        Object.assign(this, init);
    }
}

export class SupplySource {
    id!: string;
    version!: string;
    articleSupplySourceId!: string;
    createdDate!: number;
    lastModifiedDate!: number;
    positionNumber!: number;

    constructor(init?:Partial<SupplySource>) {
        Object.assign(this, init);
    }
}
