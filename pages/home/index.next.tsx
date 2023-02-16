import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";

import Accordion from "@/components/accordion";
import NoContent from "@/components/no-content";
import Product from "@/components/product";
import Spinner from "@/components/spinner";
import Main from "@/layout/main";
import Carousel, { CarouselDataProps } from "@/widgets/carousel";

import { CategoriesResponse, LanguagesResponse } from "./types";
import * as Styled from "./Home.styled";

const Home: NextPage = () => {
  const [categories, setCategories] = useState<CategoriesResponse>();
  const [languages, setLanguages] = useState<LanguagesResponse>();
  const [sliderData, setSliderData] = useState<Array<CarouselDataProps>>();

  const [activeLang, setActiveLang] = useState<string>();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [refreshCount, setRefreshCount] = useState<number>(0);

  const selectLang = (language: string) => {
    localStorage.setItem("language", language);
    setActiveLang(language);
    setRefreshCount((c) => c + 1);
  };

  const getCategories = useCallback((): void => {
    if (refreshCount >= 0) {
      fetch(
        `${process.env.NEXT_APP_API}category?language=${
          localStorage.getItem("language") || "TR"
        }`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.log(error));
    }
  }, [refreshCount]);

  const getSliderData = () => {
    fetch(`${process.env.NEXT_APP_API}slider`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setSliderData(data))
      .catch((error) => console.log(error));
  };

  const getLanguageData = () => {
    fetch(`${process.env.NEXT_APP_API}language`)
      .then((response) => response.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.log(error));
  };

  const getScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem("scroll-position") || 0;

    setTimeout(() => {
      window.scrollBy({
        top: Number(scrollPosition),
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  };

  useEffect((): void => getCategories(), [getCategories]);

  useEffect((): void => {
    getLanguageData();
    getSliderData();
    getScrollPosition();
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "TR");
      setActiveLang("TR");
    }
    setActiveLang(localStorage.getItem("language") || "");
  }, []);

  return (
    <Main title="Orient QR Menü">
      {sliderData ? (
        sliderData.length > 0 ? (
          <Carousel data={sliderData} />
        ) : (
          <NoContent message="Slider verisi bulunamadı" />
        )
      ) : (
        <Spinner />
      )}

      <Styled.Lang>
        <Styled.Detail>
          <b>Menü</b>
          <Styled.Lang>
            <Styled.Langs onClick={() => setIsActive(!isActive)}>
              <p>{activeLang}</p>
              <Styled.Arrow isActive={isActive}>
                <HipchatChevronDownIcon
                  label="chevron-down"
                  primaryColor="#2f5143"
                  size="medium"
                />
              </Styled.Arrow>
              {isActive && (
                <Styled.Dropdown>
                  {languages && languages.length > 0 ? (
                    <Styled.LangButton onClick={() => selectLang("TR")}>
                      TR
                    </Styled.LangButton>
                  ) : null}
                  {languages &&
                    languages.map((language) => (
                      <Styled.LangButton
                        key={language.id}
                        onClick={() => selectLang(language.language)}
                      >
                        {language.language}
                      </Styled.LangButton>
                    ))}
                </Styled.Dropdown>
              )}
            </Styled.Langs>
          </Styled.Lang>
        </Styled.Detail>
      </Styled.Lang>

      <Styled.Gutter>
        {categories ? (
          categories.length > 0 ? (
            categories
              .sort((a, b) => (a.order > b.order ? 1 : -1))
              .map((category, index) => (
                <Accordion
                  key={index}
                  color={category.color}
                  px={28}
                  title={category.title}
                  subCategoryList={category.subCategories?.map(
                    (item) => item.title
                  )}
                >
                  <Styled.Gutter>
                    {category.products &&
                      category.products
                        ?.sort((a, b) => (a.order > b.order ? 1 : -1))
                        .map((product, productIndex) => (
                          <Product
                            key={productIndex}
                            color={category.color}
                            href={
                              localStorage.getItem("language") === "TR"
                                ? `/product/${product.id}`
                                : `/product/${product.productId}`
                            }
                            px={24}
                            title={product.title}
                          />
                        ))}
                    {category.subCategories
                      ?.sort((a, b) => (a.order > b.order ? 1 : -1))
                      ?.map((subCategory, subCategoryIndex) => (
                        <Accordion
                          key={subCategoryIndex}
                          color={
                            subCategory.color
                              ? subCategory.color
                              : category.color
                          }
                          px={0}
                          title={subCategory.title}
                        >
                          <Styled.Gutter>
                            {subCategory.products
                              ?.sort((a, b) => (a.order > b.order ? 1 : -1))
                              ?.map((product, productIndex) => (
                                <Product
                                  key={productIndex}
                                  color={
                                    subCategory.color
                                      ? subCategory.color
                                      : category.color
                                  }
                                  href={
                                    localStorage.getItem("language") === "TR"
                                      ? `/product/${product.id}`
                                      : `/product/${product.productId}`
                                  }
                                  px={48}
                                  title={product.title}
                                />
                              ))}
                          </Styled.Gutter>
                        </Accordion>
                      ))}
                  </Styled.Gutter>
                </Accordion>
              ))
          ) : (
            <NoContent message="Kategori verisi bulunamadı" />
          )
        ) : (
          <Spinner />
        )}
      </Styled.Gutter>
      <Styled.Service>
        Fiyatlarımıza servis ücreti dahil değildir.
      </Styled.Service>
    </Main>
  );
};

export default Home;
