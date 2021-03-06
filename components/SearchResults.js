import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import ArticleCard from "./cards/ArticleCard";
import LibraryMediaCard from "./cards/LibraryMediaCard";
import UserCard from "./cards/UserCard";
import Chip from "./Chip";
import FAQGrid from "./grids/FAQGrid";
import Grid from "./grids/Grid";
import ItemsGrid from "./grids/ItemsGrid";

const ResultColumn = styled.div`
  padding: 0.5rem 0 2rem 0;
`;

const SettingsColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;

  background-color: ${(props) => props.theme.darkLight};
  border-radius: ${(props) => props.theme.radiusMax};
`;

const TabsSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1rem;
  margin: 0.5rem 0;

  cursor: pointer;

  background-color: ${(props) => props.selected && props.theme.secondary};
  border: 2px solid
    ${(props) => (!props.selected ? props.theme.secondary : props.theme.light)};
  border-radius: ${(props) => props.theme.radiusMin};
`;

const TabName = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

const NumberChip = styled(Chip)`
  && {
    margin: 0 0 0 1rem;
    color: ${(props) => props.theme.dark};
  }
`;

function SearchTab({ activeTab, name, size, onClick }) {
  return (
    <Tab selected={activeTab === name} onClick={() => onClick(name)}>
      <TabName>{name}</TabName>
      <NumberChip label={`${size}`} color={"light"} />
    </Tab>
  );
}

const ResultDescription = styled.h3`
  font-style: italic;
  font-weight: 300;

  margin-bottom: 1rem;
`;

const ResultsGrid = styled(ItemsGrid)`
  && {
    grid-template-rows: unset;
  }
`;

const UserGrid = styled(Grid)`
  && {
    grid-template-columns: 1fr;
  }
`;

export default function SearchResults({ results, params }) {
  const [activeTab, setActiveTab] = useState("All");

  let tabs = [];

  // Getting the number of results total & per type
  const totalCount =
    results &&
    Object.keys(results)
      .map((key) => {
        tabs.push({ name: key, size: results[key].length });
        return results[key].length;
      })
      .reduce((a, b) => a + b);

  return (
    <Grid inverted>
      <SettingsColumn>
        <TabsSection>
          <SearchTab
            activeTab={activeTab}
            name={"All"}
            size={totalCount}
            onClick={setActiveTab}
          />
          {tabs.map((tab) => (
            <SearchTab
              key={tab.name}
              activeTab={activeTab}
              name={tab.name}
              size={tab.size}
              onClick={setActiveTab}
            />
          ))}
        </TabsSection>
      </SettingsColumn>

      <ResultColumn>
        <ResultDescription>Results for "{params.query}"</ResultDescription>
        {activeTab === "All" && (
          <>
            <h4>News</h4>
            <ResultsGrid>
              {results.news.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </ResultsGrid>
            <h4>Frequently Asked Questions (FAQs)</h4>
            <FAQGrid faqs={results.faqs} />
            <h4>Library Medias</h4>
            <ResultsGrid>
              {results.medias.map((media) => (
                <LibraryMediaCard key={media.id} media={media} />
              ))}
            </ResultsGrid>
            <h4>Space Farmers</h4>
            <UserGrid>
              {results.users.map((user) => (
                <UserCard key={user.username} user={user} />
              ))}
            </UserGrid>
          </>
        )}
        {activeTab === "news" && (
          <>
            <h4>News</h4>
            <ResultsGrid>
              {results.news.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </ResultsGrid>
          </>
        )}
        {activeTab === "medias" && (
          <>
            <h4>Library Medias</h4>
            <ResultsGrid>
              {results.medias.map((media) => (
                <LibraryMediaCard key={media.id} media={media} />
              ))}
            </ResultsGrid>
          </>
        )}
        {activeTab === "faqs" && (
          <>
            <h4>Frequently Asked Questions (FAQs)</h4>
            <FAQGrid faqs={results.faqs} />
          </>
        )}
        {activeTab === "users" && (
          <>
            <h4>Users</h4>
            <UserGrid>
              {results.users.map((user) => (
                <UserCard user={user} />
              ))}
            </UserGrid>
          </>
        )}
      </ResultColumn>
    </Grid>
  );
}

SearchResults.propTypes = {
  /**
   * object containing the parameters used for the search
   */
  params: PropTypes.object.isRequired,
  /**
   * the results of the search
   */
  results: PropTypes.object.isRequired,
};
