import { useState } from 'react';
import { AISafetyIncident, Severity, SortOrder } from './types';
import { mockIncidents } from './mockData';
import './App.css';

function App() {
  const [incidents, setIncidents] = useState<AISafetyIncident[]>(mockIncidents);
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [expandedIncidentId, setExpandedIncidentId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newIncident, setNewIncident] = useState({
    title: '',
    description: '',
    severity: 'Medium' as Severity,
  });

  const filteredIncidents = incidents
    .filter(incident => selectedSeverity === 'All' || incident.severity === selectedSeverity)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIncident.title || !newIncident.description) return;

    const newIncidentWithId: AISafetyIncident = {
      ...newIncident,
      id: incidents.length + 1,
      reported_at: new Date().toISOString(),
    };

    setIncidents([...incidents, newIncidentWithId]);
    setNewIncident({ title: '', description: '', severity: 'Medium' });
    setShowForm(false);
  };

  return (
    <div className="app">
      <header>
        <h1>AI Safety Incident Dashboard</h1>
      </header>

      <div className="controls">
        <div className="filter-controls">
          <label>
            Filter by Severity:
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value as Severity | 'All')}
            >
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>

          <label>
            Sort by Date:
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </label>
        </div>

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Report New Incident'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="incident-form">
          <h2>Report New Incident</h2>
          <div>
            <label>
              Title:
              <input
                type="text"
                value={newIncident.title}
                onChange={(e) => setNewIncident({ ...newIncident, title: e.target.value })}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea
                value={newIncident.description}
                onChange={(e) => setNewIncident({ ...newIncident, description: e.target.value })}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Severity:
              <select
                value={newIncident.severity}
                onChange={(e) => setNewIncident({ ...newIncident, severity: e.target.value as Severity })}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
          </div>
          <button type="submit">Submit Incident</button>
        </form>
      )}

      <div className="incidents-list">
        {filteredIncidents.map((incident) => (
          <div key={incident.id} className="incident-card">
            <div className="incident-header">
              <h3>{incident.title}</h3>
              <span className={`severity-badge ${incident.severity.toLowerCase()}`}>
                {incident.severity}
              </span>
              <span className="date">
                {new Date(incident.reported_at).toLocaleDateString()}
              </span>
              <button
                onClick={() => setExpandedIncidentId(
                  expandedIncidentId === incident.id ? null : incident.id
                )}
              >
                {expandedIncidentId === incident.id ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            {expandedIncidentId === incident.id && (
              <div className="incident-details">
                <p>{incident.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 